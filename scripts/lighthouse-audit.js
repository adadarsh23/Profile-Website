import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { spawn } from 'child_process';
import chalk from 'chalk';

// Ensure Windows System32 is in PATH so taskkill works for chromeLauncher.kill()
if (process.platform === 'win32') {
  const sys32 = 'C:\\Windows\\System32';
  if (
    !process.env.PATH.split(';')
      .map((p) => p.toLowerCase())
      .includes(sys32.toLowerCase())
  ) {
    process.env.PATH = `${sys32};${process.env.PATH}`;
  }
}

const PORT = process.env.PORT || 5173;
const URL = process.env.AUDIT_URL || `http://127.0.0.1:${PORT}`;
const REPORT_FOLDER = path.join(process.cwd(), 'Lighthouse');
const TMP_CHROME_FOLDER = path.join(process.cwd(), 'tmp-chrome');
const MAX_WAIT_FOR_SERVER = 30000;
const SERVER_CHECK_INTERVAL = 500;
const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];

// Ensure folders exist
[REPORT_FOLDER, TMP_CHROME_FOLDER].forEach((folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

// Check if server is already responsive
function isServerReady(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      res.resume();
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

// Wait for server to become responsive
async function waitForServer(url, timeout = MAX_WAIT_FOR_SERVER) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      const ready = await isServerReady(url);
      if (ready) {
        clearInterval(interval);
        console.log(chalk.green(`✅ Server is ready at ${url}`));
        resolve();
      } else if (Date.now() - start > timeout) {
        clearInterval(interval);
        reject(
          new Error(
            `❌ Server did not respond at ${url} within ${timeout / 1000}s`
          )
        );
      }
    }, SERVER_CHECK_INTERVAL);
  });
}

async function runLighthouse() {
  let serverProcess = null;

  try {
    const alreadyRunning = await isServerReady(URL);

    if (!alreadyRunning) {
      console.log(
        chalk.blue(
          `🚀 Server not detected on ${URL}, starting preview server...`
        )
      );
      const distExists = fs.existsSync(
        path.join(process.cwd(), 'dist', 'index.html')
      );
      const viteBin = path.join(
        process.cwd(),
        'node_modules',
        'vite',
        'bin',
        'vite.js'
      );
      const args = distExists
        ? [viteBin, 'preview', '--port', String(PORT), '--host', '127.0.0.1']
        : [viteBin, '--port', String(PORT), '--host', '127.0.0.1', '--no-open'];

      serverProcess = spawn(process.execPath, args, {
        stdio: 'pipe',
        env: process.env,
      });

      serverProcess.on('error', (err) => {
        console.error(chalk.red('Failed to start server:'), err);
      });
    }

    console.log(chalk.blue('⏳ Waiting for server to be ready...'));
    await waitForServer(URL);

    console.log(chalk.blue('🌐 Launching headless Chrome...'));
    const chrome = await chromeLauncher.launch({
      chromeFlags: [
        '--headless=new',
        '--no-sandbox',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-component-update',
      ],
      userDataDir: TMP_CHROME_FOLDER,
      logPath: path.join(TMP_CHROME_FOLDER, 'chrome-out.log'),
    });

    const options = {
      logLevel: 'info',
      output: 'html',
      onlyCategories: CATEGORIES,
      port: chrome.port,
      maxWaitForLoad: 120000,
    };

    console.log(chalk.blue(`📊 Running Lighthouse on ${URL}...`));
    const runnerResult = await lighthouse(URL, options);

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(
      REPORT_FOLDER,
      `lighthouse-report-${timestamp}.html`
    );

    fs.writeFileSync(reportFile, runnerResult.report);
    console.log(chalk.green(`✅ Lighthouse report saved: ${reportFile}`));

    console.log(chalk.yellow('=== Lighthouse Scores ==='));
    for (const [cat, val] of Object.entries(runnerResult.lhr.categories)) {
      console.log(`${cat}: ${Math.round(val.score * 100)}`);
    }

    await chrome.kill();
    console.log(chalk.green('🟢 Chrome killed, audit complete!'));
  } catch (err) {
    console.error(chalk.red('❌ Lighthouse failed:'), err);
  } finally {
    if (serverProcess) {
      console.log(chalk.blue('🛑 Stopping preview server...'));
      if (process.platform === 'win32') {
        try {
          spawn('taskkill', ['/pid', String(serverProcess.pid), '/T', '/F'], {
            stdio: 'ignore',
          });
        } catch {
          serverProcess.kill('SIGTERM');
        }
      } else {
        serverProcess.kill('SIGTERM');
      }
    }
  }
}

runLighthouse();
