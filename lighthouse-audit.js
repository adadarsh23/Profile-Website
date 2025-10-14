import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "fs";
import path from "path";
import http from "http";
import chalk from "chalk";

const URL = "http://localhost:5173";
const REPORT_FOLDER = path.join(process.cwd(), "Lighthouse");
const TMP_CHROME_FOLDER = path.join(process.cwd(), "tmp-chrome");
const MAX_WAIT_FOR_SERVER = 30000;
const SERVER_CHECK_INTERVAL = 500;
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

// Ensure folders exist
[REPORT_FOLDER, TMP_CHROME_FOLDER].forEach(folder => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

// Wait for Vite server
async function waitForServer(url, timeout = MAX_WAIT_FOR_SERVER) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      http.get(url, res => {
        if (res.statusCode === 200) {
          clearInterval(interval);
          console.log(chalk.green(`✅ Server is ready at ${url}`));
          resolve();
        }
      }).on("error", () => {
        if (Date.now() - start > timeout) {
          clearInterval(interval);
          reject(new Error(`❌ Server did not respond at ${url} within ${timeout / 1000}s`));
        }
      });
    }, SERVER_CHECK_INTERVAL);
  });
}

async function runLighthouse() {
  try {
    console.log(chalk.blue("🚀 Waiting for dev server..."));
    await waitForServer(URL);

    console.log(chalk.blue("🌐 Launching headless Chrome..."));
    const chrome = await chromeLauncher.launch({
      chromeFlags: ["--no-sandbox", "--disable-gpu"],
      userDataDir: TMP_CHROME_FOLDER, // safe temp folder in project
      logPath: path.join(TMP_CHROME_FOLDER, "chrome-out.log"), // log file
    });

    const options = {
      logLevel: "info",
      output: "html",
      onlyCategories: CATEGORIES,
      port: chrome.port,
      maxWaitForLoad: 120000,
    };

    console.log(chalk.blue(`📊 Running Lighthouse on ${URL}...`));
    const runnerResult = await lighthouse(URL, options);

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const reportFile = path.join(REPORT_FOLDER, `lighthouse-report-${timestamp}.html`);

    fs.writeFileSync(reportFile, runnerResult.report);
    console.log(chalk.green(`✅ Lighthouse report saved: ${reportFile}`));

    console.log(chalk.yellow("=== Lighthouse Scores ==="));
    for (const [cat, val] of Object.entries(runnerResult.lhr.categories)) {
      console.log(`${cat}: ${Math.round(val.score * 100)}`);
    }

    await chrome.kill();
    console.log(chalk.green("🟢 Chrome killed, audit complete!"));
  } catch (err) {
    console.error(chalk.red("❌ Lighthouse failed:"), err);
  }
}

runLighthouse();
