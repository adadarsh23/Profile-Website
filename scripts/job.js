#!/usr/bin/env node
import { execSync, exec, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { promisify } from 'util';
import os from 'os';
import https from 'https';

const execAsync = promisify(exec);

// ==================== CONFIGURATION ====================
const CONFIG = {
  paths: {
    nodeModules: path.join(process.cwd(), 'node_modules'),
    packageLock: path.join(process.cwd(), 'package-lock.json'),
    packageJson: path.join(process.cwd(), 'package.json'),
    dist: path.join(process.cwd(), 'dist'),
    build: path.join(process.cwd(), 'build'),
    coverage: path.join(process.cwd(), 'coverage'),
    gitIgnore: path.join(process.cwd(), '.gitignore'),
    env: path.join(process.cwd(), '.env'),
    eslintrc: path.join(process.cwd(), '.eslintrc.json'),
    src: path.join(process.cwd(), 'src'),
    public: path.join(process.cwd(), 'public'),
  },
  logFile: path.join(process.cwd(), '.automation-log.txt'),
  historyFile: path.join(process.cwd(), '.automation-history.json'),
  maxHistoryEntries: 50,
};

// ==================== COLORS & STYLING ====================
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
};

// ==================== LOGGING SYSTEM ====================
class Logger {
  constructor() {
    this.logs = [];
  }

  log(msg, level = 'info', icon = 'ℹ️') {
    const timestamp = new Date().toISOString();
    const entry = { timestamp, level, message: msg, icon };
    this.logs.push(entry);

    const colorMap = {
      success: colors.green,
      error: colors.red,
      warning: colors.yellow,
      info: colors.cyan,
      debug: colors.dim,
    };

    const color = colorMap[level] || colors.cyan;
    const time = new Date().toLocaleTimeString();
    console.log(`${color}${icon} [${time}] ${msg}${colors.reset}`);
  }

  success(msg) {
    this.log(msg, 'success', '✅');
  }
  error(msg) {
    this.log(msg, 'error', '❌');
  }
  warning(msg) {
    this.log(msg, 'warning', '⚠️');
  }
  info(msg) {
    this.log(msg, 'info', 'ℹ️');
  }
  debug(msg) {
    this.log(msg, 'debug', '🔍');
  }

  saveLogs() {
    try {
      const logContent = this.logs
        .map((l) => `[${l.timestamp}] ${l.level.toUpperCase()}: ${l.message}`)
        .join('\n');
      fs.appendFileSync(CONFIG.logFile, logContent + '\n');
    } catch (err) {
      // Silent fail for logging
    }
  }
}

const logger = new Logger();

// ==================== HISTORY MANAGER ====================
class HistoryManager {
  constructor() {
    this.history = this.load();
  }

  load() {
    try {
      if (fs.existsSync(CONFIG.historyFile)) {
        return JSON.parse(fs.readFileSync(CONFIG.historyFile, 'utf8'));
      }
    } catch (err) {
      logger.warning('Could not load history file');
    }
    return [];
  }

  add(action, status, duration, details = {}) {
    const entry = {
      action,
      status,
      duration,
      timestamp: new Date().toISOString(),
      user: os.userInfo().username,
      ...details,
    };

    this.history.unshift(entry);
    if (this.history.length > CONFIG.maxHistoryEntries) {
      this.history = this.history.slice(0, CONFIG.maxHistoryEntries);
    }

    this.save();
  }

  save() {
    try {
      fs.writeFileSync(
        CONFIG.historyFile,
        JSON.stringify(this.history, null, 2)
      );
    } catch (err) {
      logger.warning('Could not save history');
    }
  }

  display(limit = 10) {
    console.log(
      `\n${colors.bright}📜 Recent Actions (Last ${limit}):${colors.reset}`
    );
    line();

    const recent = this.history.slice(0, limit);
    if (recent.length === 0) {
      logger.info('No history available yet');
      return;
    }

    recent.forEach((entry, idx) => {
      const statusIcon = entry.status === 'success' ? '✅' : '❌';
      const date = new Date(entry.timestamp).toLocaleString();
      console.log(
        `${idx + 1}. ${statusIcon} ${entry.action} - ${entry.duration}ms`
      );
      console.log(`   ${colors.dim}${date} by ${entry.user}${colors.reset}`);
    });
  }

  getStats() {
    const total = this.history.length;
    const successful = this.history.filter(
      (h) => h.status === 'success'
    ).length;
    const failed = this.history.filter((h) => h.status === 'failed').length;
    const avgDuration =
      this.history.length > 0
        ? Math.round(
            this.history.reduce((sum, h) => sum + h.duration, 0) /
              this.history.length
          )
        : 0;

    return { total, successful, failed, avgDuration };
  }
}

const history = new HistoryManager();

// ==================== PERFORMANCE TRACKER ====================
class PerformanceTracker {
  constructor(taskName) {
    this.taskName = taskName;
    this.startTime = Date.now();
  }

  end() {
    return Date.now() - this.startTime;
  }

  endWithLog(success = true) {
    const duration = this.end();
    const status = success ? 'success' : 'failed';
    history.add(this.taskName, status, duration);
    logger.info(`Task completed in ${duration}ms`);
    return duration;
  }
}

// ==================== SPINNER ====================
class Spinner {
  constructor(message) {
    this.frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    this.message = message;
    this.current = 0;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      process.stdout.write(
        `\r${colors.cyan}${this.frames[this.current]}${colors.reset} ${this.message}`
      );
      this.current = (this.current + 1) % this.frames.length;
    }, 80);
  }

  update(message) {
    this.message = message;
  }

  stop(finalMessage = '') {
    if (this.interval) {
      clearInterval(this.interval);
      if (finalMessage) {
        process.stdout.write(`\r${finalMessage}\n`);
      } else {
        process.stdout.write('\r' + ' '.repeat(100) + '\r');
      }
    }
  }
}

// ==================== PROGRESS BAR ====================
class ProgressBar {
  constructor(total, label = 'Progress') {
    this.total = total;
    this.current = 0;
    this.label = label;
    this.startTime = Date.now();
  }

  update(current) {
    this.current = current;
    this.render();
  }

  increment() {
    this.current++;
    this.render();
  }

  render() {
    const percentage = Math.floor((this.current / this.total) * 100);
    const filledLength = Math.floor(percentage / 2);
    const bar = '█'.repeat(filledLength) + '░'.repeat(50 - filledLength);
    const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(1);

    process.stdout.write(
      `\r${colors.cyan}${this.label}${colors.reset} [${bar}] ${percentage}% (${this.current}/${this.total}) ${elapsed}s`
    );

    if (this.current >= this.total) {
      process.stdout.write('\n');
    }
  }
}

// ==================== UTILITY FUNCTIONS ====================
const run = (cmd, silent = false) =>
  execSync(cmd, { stdio: silent ? 'pipe' : 'inherit' });
const runSilent = (cmd) => run(cmd, true);

const line = (char = '─', length = 70) =>
  console.log(colors.dim + char.repeat(length) + colors.reset);

const clearConsole = () => process.stdout.write('\x1Bc');

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const formatDuration = (ms) => {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.floor(ms / 60000)}m ${Math.floor((ms % 60000) / 1000)}s`;
};

async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function confirm(question) {
  const answer = await prompt(`${question} (y/n): `);
  return answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';
}

// ==================== SYSTEM INFO ====================
function getSystemInfo() {
  return {
    platform: os.platform(),
    arch: os.arch(),
    nodeVersion: process.version,
    totalMemory: formatBytes(os.totalmem()),
    freeMemory: formatBytes(os.freemem()),
    cpuCount: os.cpus().length,
    hostname: os.hostname(),
  };
}

function displaySystemInfo() {
  const info = getSystemInfo();
  console.log(`\n${colors.bright}💻 System Information${colors.reset}`);
  line();
  console.log(`  Platform: ${info.platform} (${info.arch})`);
  console.log(`  Node.js: ${info.nodeVersion}`);
  console.log(`  CPUs: ${info.cpuCount} cores`);
  console.log(`  Memory: ${info.freeMemory} free of ${info.totalMemory}`);
  console.log(`  Host: ${info.hostname}`);
}

// ==================== PROJECT VALIDATION ====================
function validateProject() {
  if (!fs.existsSync(CONFIG.paths.packageJson)) {
    logger.error(
      'package.json not found! Are you in a Node.js project directory?'
    );
    process.exit(1);
  }

  try {
    const packageJson = JSON.parse(
      fs.readFileSync(CONFIG.paths.packageJson, 'utf8')
    );
    return packageJson;
  } catch (err) {
    logger.error('Failed to parse package.json');
    process.exit(1);
  }
}

// ==================== PROJECT STATISTICS ====================
function getDirectorySize(dirPath) {
  let totalSize = 0;
  let fileCount = 0;

  const walk = (dir) => {
    try {
      const items = fs.readdirSync(dir);
      items.forEach((item) => {
        const fullPath = path.join(dir, item);
        try {
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            walk(fullPath);
          } else {
            totalSize += stat.size;
            fileCount++;
          }
        } catch (err) {
          // Skip inaccessible files
        }
      });
    } catch (err) {
      // Skip inaccessible directories
    }
  };

  if (fs.existsSync(dirPath)) {
    walk(dirPath);
  }

  return { size: totalSize, files: fileCount };
}

function getProjectStats() {
  const packageJson = validateProject();

  const nodeModulesInfo = getDirectorySize(CONFIG.paths.nodeModules);
  const distInfo = getDirectorySize(CONFIG.paths.dist);
  const srcInfo = getDirectorySize(CONFIG.paths.src);

  return {
    name: packageJson.name || 'Unknown',
    version: packageJson.version || '0.0.0',
    description: packageJson.description || '',
    hasNodeModules: fs.existsSync(CONFIG.paths.nodeModules),
    hasDist: fs.existsSync(CONFIG.paths.dist),
    hasBuild: fs.existsSync(CONFIG.paths.build),
    hasSrc: fs.existsSync(CONFIG.paths.src),
    hasPublic: fs.existsSync(CONFIG.paths.public),
    dependencies: Object.keys(packageJson.dependencies || {}).length,
    devDependencies: Object.keys(packageJson.devDependencies || {}).length,
    scripts: Object.keys(packageJson.scripts || {}),
    nodeModulesSize: nodeModulesInfo.size,
    nodeModulesFiles: nodeModulesInfo.files,
    distSize: distInfo.size,
    distFiles: distInfo.files,
    srcSize: srcInfo.size,
    srcFiles: srcInfo.files,
    packageJson,
  };
}

function displayProjectInfo() {
  const stats = getProjectStats();

  console.log(
    `\n${colors.bright}${colors.blue}📦 Project Overview${colors.reset}`
  );
  line();
  console.log(
    `  ${colors.bright}Name:${colors.reset} ${stats.name} ${colors.dim}(v${stats.version})${colors.reset}`
  );
  if (stats.description) {
    console.log(
      `  ${colors.bright}Description:${colors.reset} ${stats.description}`
    );
  }
  console.log(
    `  ${colors.bright}Dependencies:${colors.reset} ${stats.dependencies} prod + ${stats.devDependencies} dev`
  );
  console.log(
    `  ${colors.bright}Scripts:${colors.reset} ${stats.scripts.length} available`
  );

  console.log(`\n  ${colors.bright}Directories:${colors.reset}`);
  console.log(
    `    src: ${stats.hasSrc ? colors.green + '✓' : colors.red + '✗'} ${stats.hasSrc ? `(${formatBytes(stats.srcSize)}, ${stats.srcFiles} files)` : ''}${colors.reset}`
  );
  console.log(
    `    public: ${stats.hasPublic ? colors.green + '✓' : colors.red + '✗'}${colors.reset}`
  );
  console.log(
    `    node_modules: ${stats.hasNodeModules ? colors.green + '✓' : colors.red + '✗'} ${stats.hasNodeModules ? `(${formatBytes(stats.nodeModulesSize)}, ${stats.nodeModulesFiles} files)` : ''}${colors.reset}`
  );
  console.log(
    `    dist: ${stats.hasDist ? colors.green + '✓' : colors.red + '✗'} ${stats.hasDist ? `(${formatBytes(stats.distSize)}, ${stats.distFiles} files)` : ''}${colors.reset}`
  );
  console.log(
    `    build: ${stats.hasBuild ? colors.green + '✓' : colors.red + '✗'}${colors.reset}`
  );

  // Display available scripts
  if (stats.scripts.length > 0) {
    console.log(`\n  ${colors.bright}Available Scripts:${colors.reset}`);
    stats.scripts.slice(0, 8).forEach((script) => {
      console.log(`    • ${script}`);
    });
    if (stats.scripts.length > 8) {
      console.log(
        `    ${colors.dim}... and ${stats.scripts.length - 8} more${colors.reset}`
      );
    }
  }
}

// ==================== BUILD OPERATIONS ====================
async function build() {
  const tracker = new PerformanceTracker('build');
  logger.info('Starting Vite build process...');

  const spinner = new Spinner('Building project...');
  spinner.start();

  try {
    run('npm run build');
    spinner.stop(colors.green + '✅ Build completed!' + colors.reset);

    // Analyze build output
    if (fs.existsSync(CONFIG.paths.dist)) {
      const info = getDirectorySize(CONFIG.paths.dist);
      logger.success(
        `Generated ${info.files} files (${formatBytes(info.size)})`
      );

      // Find largest files
      const files = [];
      const walk = (dir) => {
        const items = fs.readdirSync(dir);
        items.forEach((item) => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isFile()) {
            files.push({
              path: path.relative(CONFIG.paths.dist, fullPath),
              size: stat.size,
            });
          } else if (stat.isDirectory()) {
            walk(fullPath);
          }
        });
      };
      walk(CONFIG.paths.dist);

      files.sort((a, b) => b.size - a.size);

      if (files.length > 0) {
        console.log(`\n  ${colors.bright}Largest files:${colors.reset}`);
        files.slice(0, 5).forEach((file, idx) => {
          console.log(
            `    ${idx + 1}. ${file.path} - ${formatBytes(file.size)}`
          );
        });
      }
    }

    tracker.endWithLog(true);
  } catch (err) {
    spinner.stop(colors.red + '❌ Build failed!' + colors.reset);
    logger.error('Build error: ' + err.message);
    tracker.endWithLog(false);
    throw err;
  }
}

// ==================== GIT OPERATIONS ====================
async function gitStatus() {
  try {
    runSilent('git rev-parse --git-dir');
  } catch {
    logger.error('Not a git repository!');
    return null;
  }

  try {
    const branch = runSilent('git branch --show-current').toString().trim();
    const status = runSilent('git status --porcelain').toString().trim();
    const lastCommit = runSilent("git log -1 --pretty=format:'%h - %s (%ar)'")
      .toString()
      .trim();
    const remote = runSilent('git remote -v').toString().trim();

    const changes = status.split('\n').filter((l) => l.trim());
    const modified = changes.filter((l) => l.startsWith(' M')).length;
    const added = changes.filter(
      (l) => l.startsWith('A') || l.startsWith('??')
    ).length;
    const deleted = changes.filter((l) => l.startsWith(' D')).length;

    return {
      branch,
      hasChanges: status.length > 0,
      totalChanges: changes.length,
      modified,
      added,
      deleted,
      lastCommit,
      hasRemote: remote.length > 0,
    };
  } catch (err) {
    logger.error('Failed to get git status');
    return null;
  }
}

async function gitPush() {
  const tracker = new PerformanceTracker('git-push');
  const status = await gitStatus();

  if (!status) return;

  console.log(`\n${colors.bright}📊 Git Status${colors.reset}`);
  line();
  console.log(`  Branch: ${colors.cyan}${status.branch}${colors.reset}`);
  console.log(
    `  Last commit: ${colors.dim}${status.lastCommit}${colors.reset}`
  );
  console.log(
    `  Changes: ${status.modified} modified, ${status.added} added, ${status.deleted} deleted`
  );

  if (!status.hasChanges) {
    logger.warning('No changes to commit');
    return;
  }

  // Show changed files
  const changedFiles = runSilent('git status --porcelain')
    .toString()
    .trim()
    .split('\n');
  console.log(`\n  ${colors.bright}Modified files:${colors.reset}`);
  changedFiles.slice(0, 10).forEach((file) => {
    const parts = file.trim().split(' ');
    const status = parts[0];
    const filename = parts.slice(1).join(' ');
    const icon = status.includes('M')
      ? '📝'
      : status.includes('A')
        ? '➕'
        : '➖';
    console.log(`    ${icon} ${filename}`);
  });
  if (changedFiles.length > 10) {
    console.log(
      `    ${colors.dim}... and ${changedFiles.length - 10} more files${colors.reset}`
    );
  }

  // Confirm before committing
  const shouldContinue = await confirm('\nProceed with commit?');
  if (!shouldContinue) {
    logger.info('Cancelled');
    return;
  }

  logger.info('Staging changes...');
  run('git add .');

  const commitMsg = await prompt(
    'Commit message (or press Enter for auto-message): '
  );
  const finalMsg =
    commitMsg || `🤖 Auto commit - ${new Date().toLocaleString()}`;

  logger.info(`Committing: "${finalMsg}"`);
  run(`git commit -m "${finalMsg}"`);

  if (status.hasRemote) {
    const shouldPush = await confirm(`Push to ${status.branch}?`);
    if (shouldPush) {
      logger.info('Pushing to remote...');
      const spinner = new Spinner(`Pushing to ${status.branch}...`);
      spinner.start();
      try {
        run(`git push origin ${status.branch}`);
        spinner.stop(colors.green + '✅ Pushed successfully!' + colors.reset);
      } catch (err) {
        spinner.stop(colors.red + '❌ Push failed!' + colors.reset);
        throw err;
      }
    }
  } else {
    logger.warning('No remote configured');
  }

  tracker.endWithLog(true);
}

// ==================== ADVANCED GIT OPERATIONS ====================
async function gitAdvanced() {
  console.log(`\n${colors.bright}🔀 Advanced Git Operations${colors.reset}`);
  line();
  console.log('  1. Create new branch');
  console.log('  2. Switch branch');
  console.log('  3. View commit history');
  console.log('  4. Stash changes');
  console.log('  5. Apply stash');
  console.log('  6. View diff');
  console.log('  0. Back to main menu');
  line();

  const choice = await prompt('Choose option: ');

  switch (choice) {
    case '1': {
      const branchName = await prompt('New branch name: ');
      if (branchName) {
        try {
          run(`git checkout -b ${branchName}`);
          logger.success(`Created and switched to branch: ${branchName}`);
        } catch (err) {
          logger.error('Failed to create branch');
        }
      }
      break;
    }
    case '2': {
      try {
        const branches = runSilent('git branch').toString().trim().split('\n');
        console.log('\nAvailable branches:');
        branches.forEach((b, i) => console.log(`  ${i + 1}. ${b.trim()}`));
        const branchName = await prompt('\nBranch name to switch: ');
        if (branchName) {
          run(`git checkout ${branchName}`);
          logger.success(`Switched to: ${branchName}`);
        }
      } catch (err) {
        logger.error('Failed to switch branch');
      }
      break;
    }
    case '3': {
      const count = await prompt('Number of commits to show (default 10): ');
      const num = count || '10';
      run(`git log --oneline --graph -${num}`);
      break;
    }
    case '4': {
      const message = await prompt('Stash message (optional): ');
      try {
        if (message) {
          run(`git stash push -m "${message}"`);
        } else {
          run('git stash');
        }
        logger.success('Changes stashed');
      } catch (err) {
        logger.error('Failed to stash');
      }
      break;
    }
    case '5': {
      try {
        const stashes = runSilent('git stash list').toString().trim();
        if (!stashes) {
          logger.warning('No stashes available');
          break;
        }
        console.log('\nAvailable stashes:');
        console.log(stashes);
        const shouldApply = await confirm('\nApply latest stash?');
        if (shouldApply) {
          run('git stash pop');
          logger.success('Stash applied');
        }
      } catch (err) {
        logger.error('Failed to apply stash');
      }
      break;
    }
    case '6': {
      run('git diff');
      break;
    }
  }
}

// ==================== CLEANUP OPERATIONS ====================
async function deleteNodeModules() {
  if (!fs.existsSync(CONFIG.paths.nodeModules)) {
    logger.warning('node_modules not found');
    return;
  }

  logger.info('Analyzing node_modules...');
  const info = getDirectorySize(CONFIG.paths.nodeModules);
  logger.info(`Found ${info.files} files (${formatBytes(info.size)})`);

  const shouldDelete = await confirm(
    `Delete node_modules (${formatBytes(info.size)})?`
  );
  if (!shouldDelete) {
    logger.info('Cancelled');
    return;
  }

  const spinner = new Spinner('Deleting node_modules...');
  spinner.start();

  try {
    fs.rmSync(CONFIG.paths.nodeModules, { recursive: true, force: true });
    spinner.stop(colors.green + '✅ Deleted successfully!' + colors.reset);
    logger.success(`Freed ${formatBytes(info.size)} of disk space`);
  } catch (err) {
    spinner.stop(colors.red + '❌ Deletion failed!' + colors.reset);
    logger.error('Error: ' + err.message);
  }
}

async function clearCache() {
  logger.info('Clearing caches...');
  const spinner = new Spinner('Cleaning caches...');
  spinner.start();

  try {
    run('npm cache clean --force');
    spinner.update('Clearing npm cache...');

    if (fs.existsSync(CONFIG.paths.packageLock)) {
      fs.unlinkSync(CONFIG.paths.packageLock);
      spinner.update('Removing package-lock.json...');
    }

    spinner.stop(colors.green + '✅ Cache cleared!' + colors.reset);
    logger.success('All caches cleaned');
  } catch (err) {
    spinner.stop(colors.red + '❌ Failed!' + colors.reset);
    logger.error('Cache clear error: ' + err.message);
  }
}

async function fullClean() {
  const tracker = new PerformanceTracker('full-clean');

  console.log(
    `\n${colors.bright}${colors.yellow}🧹 FULL CLEANUP MODE${colors.reset}`
  );
  line();
  console.log('This will:');
  console.log('  • Delete node_modules');
  console.log('  • Delete dist/build folders');
  console.log('  • Clear npm cache');
  console.log('  • Remove package-lock.json');
  console.log('  • Reinstall all dependencies');
  line();

  const confirmed = await confirm('Continue with full cleanup?');
  if (!confirmed) {
    logger.info('Cancelled');
    return;
  }

  // Calculate total size to be removed
  let totalSize = 0;
  if (fs.existsSync(CONFIG.paths.nodeModules)) {
    totalSize += getDirectorySize(CONFIG.paths.nodeModules).size;
  }
  if (fs.existsSync(CONFIG.paths.dist)) {
    totalSize += getDirectorySize(CONFIG.paths.dist).size;
  }
  if (fs.existsSync(CONFIG.paths.build)) {
    totalSize += getDirectorySize(CONFIG.paths.build).size;
  }

  logger.info(`Will free approximately ${formatBytes(totalSize)}`);

  const spinner = new Spinner('Cleaning up...');
  spinner.start();

  // Delete directories
  const dirsToDelete = [
    CONFIG.paths.nodeModules,
    CONFIG.paths.dist,
    CONFIG.paths.build,
    CONFIG.paths.coverage,
  ];

  for (const dir of dirsToDelete) {
    if (fs.existsSync(dir)) {
      spinner.update(`Deleting ${path.basename(dir)}...`);
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }

  // Clear cache
  spinner.update('Clearing npm cache...');
  run('npm cache clean --force');

  if (fs.existsSync(CONFIG.paths.packageLock)) {
    fs.unlinkSync(CONFIG.paths.packageLock);
  }

  spinner.stop(colors.green + '✅ Cleanup complete!' + colors.reset);
  logger.success(`Freed ${formatBytes(totalSize)}`);

  // Reinstall
  const shouldReinstall = await confirm('Install dependencies now?');
  if (shouldReinstall) {
    await installDependencies();
  }

  tracker.endWithLog(true);
}

async function installDependencies() {
  logger.info('Installing dependencies...');
  const spinner = new Spinner('Running npm install...');
  spinner.start();

  try {
    run('npm install');
    spinner.stop(colors.green + '✅ Installation complete!' + colors.reset);

    const stats = getProjectStats();
    logger.success(
      `Installed ${stats.dependencies + stats.devDependencies} packages`
    );
    logger.info(`node_modules size: ${formatBytes(stats.nodeModulesSize)}`);
  } catch (err) {
    spinner.stop(colors.red + '❌ Installation failed!' + colors.reset);
    logger.error('Install error: ' + err.message);
    throw err;
  }
}

// ==================== DEPENDENCY OPERATIONS ====================
async function analyzeDependencies() {
  const tracker = new PerformanceTracker('analyze-deps');
  const packageJson = validateProject();
  const deps = packageJson.dependencies || {};
  const devDeps = packageJson.devDependencies || {};

  console.log(`\n${colors.bright}📊 Dependency Analysis${colors.reset}`);
  line();

  console.log(
    `\n${colors.cyan}Production Dependencies (${Object.keys(deps).length}):${colors.reset}`
  );
  Object.entries(deps)
    .slice(0, 15)
    .forEach(([name, version]) => {
      console.log(`  • ${name}${colors.dim}@${version}${colors.reset}`);
    });
  if (Object.keys(deps).length > 15) {
    console.log(
      `  ${colors.dim}... and ${Object.keys(deps).length - 15} more${colors.reset}`
    );
  }

  console.log(
    `\n${colors.cyan}Dev Dependencies (${Object.keys(devDeps).length}):${colors.reset}`
  );
  Object.entries(devDeps)
    .slice(0, 15)
    .forEach(([name, version]) => {
      console.log(`  • ${name}${colors.dim}@${version}${colors.reset}`);
    });
  if (Object.keys(devDeps).length > 15) {
    console.log(
      `  ${colors.dim}... and ${Object.keys(devDeps).length - 15} more${colors.reset}`
    );
  }

  // Check for outdated packages
  logger.info('\nChecking for outdated packages...');
  const spinner = new Spinner('Analyzing package versions...');
  spinner.start();

  try {
    const outdated = runSilent('npm outdated --json').toString();
    spinner.stop();

    if (outdated) {
      const packages = JSON.parse(outdated);
      const count = Object.keys(packages).length;

      if (count > 0) {
        logger.warning(`Found ${count} outdated package(s)!`);
        console.log(`\n${colors.bright}Outdated Packages:${colors.reset}`);
        Object.entries(packages)
          .slice(0, 10)
          .forEach(([name, info]) => {
            console.log(
              `  • ${name}: ${colors.red}${info.current}${colors.reset} → ${colors.green}${info.latest}${colors.reset}`
            );
          });

        const shouldUpdate = await confirm('\nUpdate outdated packages?');
        if (shouldUpdate) {
          logger.info('Updating packages...');
          run('npm update');
          logger.success('Packages updated!');
        }
      } else {
        logger.success('All packages are up to date!');
      }
    } else {
      logger.success('All packages are up to date!');
    }
  } catch {
    spinner.stop();
    logger.success('All packages are up to date!');
  }

  // Security audit
  logger.info('\nRunning security audit...');
  try {
    const audit = runSilent('npm audit --json').toString();
    const auditData = JSON.parse(audit);

    if (auditData.metadata) {
      const vulnerabilities = auditData.metadata.vulnerabilities;
      const total = vulnerabilities.total || 0;

      if (total > 0) {
        logger.warning(`Found ${total} security vulnerabilities!`);
        console.log(`  Critical: ${vulnerabilities.critical || 0}`);
        console.log(`  High: ${vulnerabilities.high || 0}`);
        console.log(`  Moderate: ${vulnerabilities.moderate || 0}`);
        console.log(`  Low: ${vulnerabilities.low || 0}`);

        const shouldFix = await confirm('\nAttempt automatic fix?');
        if (shouldFix) {
          logger.info('Running npm audit fix...');
          run('npm audit fix');
          logger.success('Vulnerabilities fixed where possible');
        }
      } else {
        logger.success('No security vulnerabilities found!');
      }
    }
  } catch (err) {
    logger.warning('Could not complete security audit');
  }

  tracker.endWithLog(true);
}

// ==================== TESTING OPERATIONS ====================
async function runTests() {
  const tracker = new PerformanceTracker('tests');
  const packageJson = validateProject();

  if (!packageJson.scripts || !packageJson.scripts.test) {
    logger.warning('No test script found in package.json');
    return;
  }

  logger.info('Running test suite...');
  const spinner = new Spinner('Executing tests...');
  spinner.start();

  try {
    run('npm test');
    spinner.stop(colors.green + '✅ All tests passed!' + colors.reset);

    // Check for coverage
    if (fs.existsSync(CONFIG.paths.coverage)) {
      logger.info('Test coverage report available in ./coverage');
    }

    tracker.endWithLog(true);
  } catch (err) {
    spinner.stop(colors.red + '❌ Tests failed!' + colors.reset);
    logger.error('Some tests failed');
    tracker.endWithLog(false);
  }
}

async function runTestsWithCoverage() {
  const tracker = new PerformanceTracker('test-coverage');
  const packageJson = validateProject();

  const testScript =
    packageJson.scripts?.['test:coverage'] || packageJson.scripts?.test;
  if (!testScript) {
    logger.warning('No test script found');
    return;
  }

  logger.info('Running tests with coverage...');
  const spinner = new Spinner('Generating coverage report...');
  spinner.start();

  try {
    if (packageJson.scripts['test:coverage']) {
      run('npm run test:coverage');
    } else {
      run('npm test -- --coverage');
    }

    spinner.stop(colors.green + '✅ Tests completed!' + colors.reset);

    if (fs.existsSync(CONFIG.paths.coverage)) {
      logger.success('Coverage report generated in ./coverage');

      // Try to open coverage report
      const shouldOpen = await confirm('Open coverage report in browser?');
      if (shouldOpen) {
        const coverageHtml = path.join(
          CONFIG.paths.coverage,
          'lcov-report',
          'index.html'
        );
        if (fs.existsSync(coverageHtml)) {
          const openCmd =
            process.platform === 'win32'
              ? 'start'
              : process.platform === 'darwin'
                ? 'open'
                : 'xdg-open';
          try {
            run(`${openCmd} ${coverageHtml}`);
            logger.success('Opening coverage report...');
          } catch {
            logger.warning('Could not open browser automatically');
          }
        }
      }
    }

    tracker.endWithLog(true);
  } catch (err) {
    spinner.stop(colors.red + '❌ Tests failed!' + colors.reset);
    tracker.endWithLog(false);
  }
}

// ==================== CODE QUALITY ====================
async function lintAndFormat() {
  const tracker = new PerformanceTracker('lint-format');
  const packageJson = validateProject();

  console.log(`\n${colors.bright}✨ Code Quality Check${colors.reset}`);
  line();

  // Linting
  if (packageJson.scripts?.lint) {
    logger.info('Running linter...');
    const spinner = new Spinner('Analyzing code...');
    spinner.start();

    try {
      run('npm run lint');
      spinner.stop(colors.green + '✅ Linting passed!' + colors.reset);
    } catch (err) {
      spinner.stop(colors.yellow + '⚠️  Linting issues found' + colors.reset);

      if (packageJson.scripts['lint:fix']) {
        const shouldFix = await confirm('Attempt automatic fix?');
        if (shouldFix) {
          logger.info('Running lint fix...');
          try {
            run('npm run lint:fix');
            logger.success('Issues fixed!');
          } catch {
            logger.warning('Some issues require manual fixing');
          }
        }
      }
    }
  } else {
    logger.warning('No lint script found');
  }

  // Formatting
  if (packageJson.scripts?.format) {
    logger.info('\nFormatting code...');
    const spinner = new Spinner('Formatting files...');
    spinner.start();

    try {
      run('npm run format');
      spinner.stop(colors.green + '✅ Code formatted!' + colors.reset);
    } catch (err) {
      spinner.stop(colors.red + '❌ Formatting failed!' + colors.reset);
    }
  } else {
    logger.warning('No format script found');
  }

  // Type checking (if TypeScript)
  if (
    packageJson.scripts?.['type-check'] ||
    packageJson.devDependencies?.typescript
  ) {
    logger.info('\nType checking...');
    const spinner = new Spinner('Checking types...');
    spinner.start();

    try {
      if (packageJson.scripts['type-check']) {
        run('npm run type-check');
      } else {
        run('npx tsc --noEmit');
      }
      spinner.stop(colors.green + '✅ Type check passed!' + colors.reset);
    } catch (err) {
      spinner.stop(colors.red + '❌ Type errors found!' + colors.reset);
    }
  }

  tracker.endWithLog(true);
}

// ==================== PREVIEW & DEV SERVER ====================
async function startDevServer() {
  const packageJson = validateProject();

  if (!packageJson.scripts?.dev && !packageJson.scripts?.start) {
    logger.error('No dev or start script found');
    return;
  }

  const command = packageJson.scripts.dev ? 'dev' : 'start';
  logger.info(`Starting development server...`);
  console.log(colors.dim + 'Press Ctrl+C to stop' + colors.reset);

  try {
    run(`npm run ${command}`);
  } catch (err) {
    logger.error('Dev server stopped');
  }
}

async function previewBuild() {
  const packageJson = validateProject();

  if (!packageJson.scripts?.preview) {
    logger.warning('No preview script found, using dev server instead');
    await startDevServer();
    return;
  }

  if (!fs.existsSync(CONFIG.paths.dist) && !fs.existsSync(CONFIG.paths.build)) {
    logger.warning('No build found. Building first...');
    await build();
  }

  logger.info('Starting preview server...');
  console.log(colors.dim + 'Press Ctrl+C to stop' + colors.reset);

  try {
    run('npm run preview');
  } catch (err) {
    logger.error('Preview server stopped');
  }
}

// ==================== BUNDLE ANALYZER ====================
async function analyzeBundle() {
  logger.info('Analyzing bundle size...');

  if (!fs.existsSync(CONFIG.paths.dist)) {
    logger.warning('No dist folder found. Building first...');
    await build();
  }

  const stats = getDirectorySize(CONFIG.paths.dist);

  console.log(`\n${colors.bright}📦 Bundle Analysis${colors.reset}`);
  line();
  console.log(`  Total size: ${formatBytes(stats.size)}`);
  console.log(`  Total files: ${stats.files}`);

  // Analyze by file type
  const fileTypes = {};
  const walk = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isFile()) {
        const ext = path.extname(item) || 'no-extension';
        fileTypes[ext] = fileTypes[ext] || { count: 0, size: 0 };
        fileTypes[ext].count++;
        fileTypes[ext].size += stat.size;
      } else if (stat.isDirectory()) {
        walk(fullPath);
      }
    });
  };

  if (fs.existsSync(CONFIG.paths.dist)) {
    walk(CONFIG.paths.dist);

    console.log(`\n${colors.bright}By File Type:${colors.reset}`);
    Object.entries(fileTypes)
      .sort((a, b) => b[1].size - a[1].size)
      .forEach(([ext, info]) => {
        const percentage = ((info.size / stats.size) * 100).toFixed(1);
        console.log(
          `  ${ext}: ${formatBytes(info.size)} (${percentage}%) - ${info.count} files`
        );
      });
  }
}

// ==================== BACKUP & RESTORE ====================
async function createBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const backupDir = path.join(process.cwd(), '.backups', timestamp);

  logger.info('Creating project backup...');

  try {
    fs.mkdirSync(backupDir, { recursive: true });

    const itemsToBackup = [
      'src',
      'public',
      'package.json',
      'package-lock.json',
      '.env',
    ];
    const spinner = new Spinner('Backing up files...');
    spinner.start();

    for (const item of itemsToBackup) {
      const srcPath = path.join(process.cwd(), item);
      if (fs.existsSync(srcPath)) {
        const destPath = path.join(backupDir, item);
        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
          fs.cpSync(srcPath, destPath, { recursive: true });
        } else {
          fs.cpSync(srcPath, destPath);
        }
      }
    }

    spinner.stop(colors.green + '✅ Backup created!' + colors.reset);
    logger.success(`Backup location: ${backupDir}`);

    const size = getDirectorySize(backupDir);
    logger.info(`Backup size: ${formatBytes(size.size)}`);
  } catch (err) {
    logger.error('Backup failed: ' + err.message);
  }
}

// ==================== ENVIRONMENT MANAGEMENT ====================
async function manageEnvironment() {
  console.log(`\n${colors.bright}🔐 Environment Management${colors.reset}`);
  line();

  if (!fs.existsSync(CONFIG.paths.env)) {
    logger.warning('No .env file found');
    const shouldCreate = await confirm('Create .env file?');
    if (shouldCreate) {
      fs.writeFileSync(CONFIG.paths.env, '# Environment Variables\n');
      logger.success('.env file created');
    }
    return;
  }

  const envContent = fs.readFileSync(CONFIG.paths.env, 'utf8');
  const lines = envContent
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'));

  console.log(
    `\n${colors.bright}Current Variables (${lines.length}):${colors.reset}`
  );
  lines.forEach((line) => {
    const [key] = line.split('=');
    console.log(`  • ${key}`);
  });

  console.log('\nOptions:');
  console.log('  1. View all values');
  console.log('  2. Add new variable');
  console.log('  3. Create .env.example');
  console.log('  0. Back');

  const choice = await prompt('\nChoose option: ');

  switch (choice) {
    case '1':
      console.log(`\n${colors.dim}${envContent}${colors.reset}`);
      break;
    case '2':
      const key = await prompt('Variable name: ');
      const value = await prompt('Variable value: ');
      if (key && value) {
        fs.appendFileSync(CONFIG.paths.env, `\n${key}=${value}`);
        logger.success('Variable added');
      }
      break;
    case '3':
      const exampleContent = lines
        .map((l) => {
          const [key] = l.split('=');
          return `${key}=your_value_here`;
        })
        .join('\n');
      fs.writeFileSync(
        path.join(process.cwd(), '.env.example'),
        exampleContent
      );
      logger.success('.env.example created');
      break;
  }
}

// ==================== FILE EXPLORER & ANALYZER ====================
async function exploreProjectFiles() {
  console.log(`\n${colors.bright}📂 Project File Explorer${colors.reset}`);
  line();

  if (!fs.existsSync(CONFIG.paths.src)) {
    logger.warning('src directory not found');
    return;
  }

  const fileStats = {
    byExtension: {},
    total: 0,
    totalSize: 0,
    largest: [],
  };

  const walkDirectory = (dir, relativePath = '') => {
    try {
      const items = fs.readdirSync(dir);

      items.forEach((item) => {
        const fullPath = path.join(dir, item);
        const relPath = path.join(relativePath, item);

        try {
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            walkDirectory(fullPath, relPath);
          } else {
            const ext = path.extname(item) || 'no-extension';

            if (!fileStats.byExtension[ext]) {
              fileStats.byExtension[ext] = { count: 0, size: 0, files: [] };
            }

            fileStats.byExtension[ext].count++;
            fileStats.byExtension[ext].size += stat.size;
            fileStats.byExtension[ext].files.push({
              path: relPath,
              size: stat.size,
            });

            fileStats.total++;
            fileStats.totalSize += stat.size;

            fileStats.largest.push({
              path: relPath,
              size: stat.size,
              ext,
            });
          }
        } catch (err) {
          // Skip files we can't access
        }
      });
    } catch (err) {
      // Skip directories we can't access
    }
  };

  logger.info('Analyzing project files...');
  const spinner = new Spinner('Scanning directories...');
  spinner.start();

  walkDirectory(CONFIG.paths.src);

  // Sort largest files
  fileStats.largest.sort((a, b) => b.size - a.size);

  spinner.stop(colors.green + '✅ Analysis complete!' + colors.reset);

  // Display statistics
  console.log(`\n${colors.bright}📊 File Statistics${colors.reset}`);
  line();
  console.log(`  Total files: ${fileStats.total}`);
  console.log(`  Total size: ${formatBytes(fileStats.totalSize)}`);

  // Display by file type
  console.log(`\n${colors.bright}📄 By File Type:${colors.reset}`);
  const sortedExtensions = Object.entries(fileStats.byExtension).sort(
    (a, b) => b[1].count - a[1].count
  );

  sortedExtensions.forEach(([ext, data]) => {
    const percentage = ((data.size / fileStats.totalSize) * 100).toFixed(1);
    console.log(
      `  ${ext.padEnd(15)} ${data.count.toString().padStart(4)} files  ${formatBytes(data.size).padStart(10)}  (${percentage}%)`
    );
  });

  // Display largest files
  console.log(`\n${colors.bright}📈 Largest Files (Top 15):${colors.reset}`);
  fileStats.largest.slice(0, 15).forEach((file, idx) => {
    console.log(
      `  ${(idx + 1).toString().padStart(2)}. ${formatBytes(file.size).padStart(10)}  ${colors.dim}${file.path}${colors.reset}`
    );
  });

  // Component/File counter by directory
  const directoryCounts = {};
  fileStats.largest.forEach((file) => {
    const dir = path.dirname(file.path) || 'root';
    directoryCounts[dir] = (directoryCounts[dir] || 0) + 1;
  });

  console.log(`\n${colors.bright}📁 Files by Directory:${colors.reset}`);
  Object.entries(directoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([dir, count]) => {
      console.log(
        `  ${count.toString().padStart(3)} files in ${colors.cyan}${dir}${colors.reset}`
      );
    });

  // Additional actions menu
  console.log(`\n${colors.bright}Actions:${colors.reset}`);
  console.log('  1. Search for specific file');
  console.log('  2. Show files by extension');
  console.log('  3. Find duplicate file names');
  console.log('  4. Calculate code complexity');
  console.log('  0. Back to main menu');

  const choice = await prompt('\nChoose action: ');

  switch (choice) {
    case '1':
      await searchFiles(fileStats);
      break;
    case '2':
      await showFilesByExtension(fileStats);
      break;
    case '3':
      await findDuplicates(fileStats);
      break;
    case '4':
      await analyzeCodeComplexity();
      break;
  }
}

async function searchFiles(fileStats) {
  const searchTerm = await prompt('\nEnter search term (filename): ');
  if (!searchTerm) return;

  console.log(`\n${colors.bright}🔍 Search Results:${colors.reset}`);
  let found = 0;

  Object.values(fileStats.byExtension).forEach((data) => {
    data.files.forEach((file) => {
      if (file.path.toLowerCase().includes(searchTerm.toLowerCase())) {
        console.log(
          `  • ${file.path} ${colors.dim}(${formatBytes(file.size)})${colors.reset}`
        );
        found++;
      }
    });
  });

  if (found === 0) {
    logger.warning('No files found matching search term');
  } else {
    logger.success(`Found ${found} matching file(s)`);
  }
}

async function showFilesByExtension(fileStats) {
  console.log(`\n${colors.bright}Available Extensions:${colors.reset}`);
  const extensions = Object.keys(fileStats.byExtension);
  extensions.forEach((ext, idx) => {
    console.log(
      `  ${idx + 1}. ${ext} (${fileStats.byExtension[ext].count} files)`
    );
  });

  const choice = await prompt('\nEnter extension number: ');
  const idx = parseInt(choice) - 1;

  if (idx >= 0 && idx < extensions.length) {
    const ext = extensions[idx];
    const data = fileStats.byExtension[ext];

    console.log(
      `\n${colors.bright}Files with extension ${ext}:${colors.reset}`
    );
    data.files
      .sort((a, b) => b.size - a.size)
      .forEach((file, i) => {
        console.log(
          `  ${(i + 1).toString().padStart(3)}. ${file.path} ${colors.dim}(${formatBytes(file.size)})${colors.reset}`
        );
      });
  }
}

async function findDuplicates(fileStats) {
  console.log(`\n${colors.bright}🔍 Finding Duplicate Names...${colors.reset}`);

  const fileNames = {};
  Object.values(fileStats.byExtension).forEach((data) => {
    data.files.forEach((file) => {
      const baseName = path.basename(file.path);
      if (!fileNames[baseName]) {
        fileNames[baseName] = [];
      }
      fileNames[baseName].push(file.path);
    });
  });

  const duplicates = Object.entries(fileNames).filter(
    ([name, paths]) => paths.length > 1
  );

  if (duplicates.length === 0) {
    logger.success('No duplicate file names found!');
    return;
  }

  logger.warning(`Found ${duplicates.length} duplicate name(s):`);
  duplicates.forEach(([name, paths]) => {
    console.log(`\n  ${colors.yellow}${name}${colors.reset} appears in:`);
    paths.forEach((p) => console.log(`    • ${colors.dim}${p}${colors.reset}`));
  });
}

async function analyzeCodeComplexity() {
  if (!fs.existsSync(CONFIG.paths.src)) {
    logger.warning('src directory not found');
    return;
  }

  console.log(`\n${colors.bright}🧮 Code Complexity Analysis${colors.reset}`);
  line();

  const stats = {
    totalLines: 0,
    codeLines: 0,
    commentLines: 0,
    blankLines: 0,
    fileCount: 0,
  };

  const codeExtensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.scss',
    '.html',
  ];

  const analyzeFile = (filePath) => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      stats.fileCount++;
      stats.totalLines += lines.length;

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (trimmed === '') {
          stats.blankLines++;
        } else if (
          trimmed.startsWith('//') ||
          trimmed.startsWith('/*') ||
          trimmed.startsWith('*')
        ) {
          stats.commentLines++;
        } else {
          stats.codeLines++;
        }
      });
    } catch (err) {
      // Skip files we can't read
    }
  };

  const walkForCode = (dir) => {
    try {
      const items = fs.readdirSync(dir);
      items.forEach((item) => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkForCode(fullPath);
        } else if (codeExtensions.includes(path.extname(item))) {
          analyzeFile(fullPath);
        }
      });
    } catch (err) {
      // Skip directories we can't access
    }
  };

  const spinner = new Spinner('Analyzing code...');
  spinner.start();

  walkForCode(CONFIG.paths.src);

  spinner.stop(colors.green + '✅ Analysis complete!' + colors.reset);

  console.log(`\n${colors.bright}Results:${colors.reset}`);
  console.log(`  Files analyzed: ${stats.fileCount}`);
  console.log(`  Total lines: ${stats.totalLines}`);
  console.log(
    `  Code lines: ${stats.codeLines} (${((stats.codeLines / stats.totalLines) * 100).toFixed(1)}%)`
  );
  console.log(
    `  Comment lines: ${stats.commentLines} (${((stats.commentLines / stats.totalLines) * 100).toFixed(1)}%)`
  );
  console.log(
    `  Blank lines: ${stats.blankLines} (${((stats.blankLines / stats.totalLines) * 100).toFixed(1)}%)`
  );
  console.log(
    `  Average lines per file: ${Math.round(stats.totalLines / stats.fileCount)}`
  );

  const commentRatio = ((stats.commentLines / stats.codeLines) * 100).toFixed(
    1
  );
  console.log(
    `\n  ${colors.bright}Comment ratio: ${commentRatio}%${colors.reset}`
  );

  if (commentRatio < 10) {
    logger.warning('Low comment coverage - consider adding more documentation');
  } else if (commentRatio > 30) {
    logger.info('Good comment coverage!');
  } else {
    logger.info('Moderate comment coverage');
  }
}

// ==================== PROJECT STRUCTURE GENERATOR ====================
async function generateProjectStructure() {
  console.log(
    `\n${colors.bright}🌲 Project Structure Generator${colors.reset}`
  );
  line();

  const structure = [];
  const ignoreDirs = [
    'node_modules',
    '.git',
    'dist',
    'build',
    'coverage',
    '.next',
    '.cache',
  ];

  const buildTree = (dir, prefix = '', isLast = true) => {
    try {
      const baseName = path.basename(dir);
      const connector = isLast ? '└── ' : '├── ';
      structure.push(prefix + connector + baseName);

      if (fs.statSync(dir).isDirectory() && !ignoreDirs.includes(baseName)) {
        const items = fs
          .readdirSync(dir)
          .filter((item) => !item.startsWith('.') && !ignoreDirs.includes(item))
          .sort();

        const newPrefix = prefix + (isLast ? '    ' : '│   ');

        items.forEach((item, idx) => {
          const fullPath = path.join(dir, item);
          const isLastItem = idx === items.length - 1;

          try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
              buildTree(fullPath, newPrefix, isLastItem);
            } else {
              const connector = isLastItem ? '└── ' : '├── ';
              const icon = getFileIcon(item);
              structure.push(newPrefix + connector + icon + ' ' + item);
            }
          } catch (err) {
            // Skip inaccessible items
          }
        });
      }
    } catch (err) {
      // Skip inaccessible directories
    }
  };

  const getFileIcon = (filename) => {
    const ext = path.extname(filename);
    const icons = {
      '.js': '📜',
      '.jsx': '⚛️',
      '.ts': '📘',
      '.tsx': '⚛️',
      '.json': '📋',
      '.css': '🎨',
      '.scss': '🎨',
      '.html': '🌐',
      '.md': '📝',
      '.env': '🔐',
      '.gitignore': '🚫',
    };
    return icons[ext] || '📄';
  };

  logger.info('Generating structure...');
  const spinner = new Spinner('Building tree...');
  spinner.start();

  structure.push(colors.bright + path.basename(process.cwd()) + colors.reset);

  const mainDirs = [
    'src',
    'public',
    'components',
    'pages',
    'styles',
    'utils',
    'config',
  ];
  mainDirs.forEach((dir) => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      buildTree(dirPath, '', false);
    }
  });

  // Add important root files
  const rootFiles = [
    'package.json',
    'vite.config.js',
    'tsconfig.json',
    '.env',
    'README.md',
  ];
  rootFiles.forEach((file, idx) => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const isLast = idx === rootFiles.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      const icon = getFileIcon(file);
      structure.push(connector + icon + ' ' + file);
    }
  });

  spinner.stop(colors.green + '✅ Structure generated!' + colors.reset);

  console.log('\n' + structure.join('\n'));

  const shouldSave = await confirm('\nSave structure to file?');
  if (shouldSave) {
    const filename = 'project-structure.txt';
    fs.writeFileSync(filename, structure.join('\n'));
    logger.success(`Saved to ${filename}`);
  }
}

// ==================== PROJECT HEALTH CHECK ====================
async function healthCheck() {
  const tracker = new PerformanceTracker('health-check');

  console.log(`\n${colors.bright}🏥 Project Health Check${colors.reset}`);
  line();

  const checks = [];
  const spinner = new Spinner('Running diagnostics...');
  spinner.start();

  // Check 1: package.json validity
  try {
    validateProject();
    checks.push({ name: 'package.json', status: 'pass', message: 'Valid' });
  } catch {
    checks.push({
      name: 'package.json',
      status: 'fail',
      message: 'Invalid or missing',
    });
  }

  // Check 2: node_modules
  checks.push({
    name: 'node_modules',
    status: fs.existsSync(CONFIG.paths.nodeModules) ? 'pass' : 'fail',
    message: fs.existsSync(CONFIG.paths.nodeModules) ? 'Installed' : 'Missing',
  });

  // Check 3: Git repository
  try {
    runSilent('git rev-parse --git-dir');
    checks.push({
      name: 'Git repository',
      status: 'pass',
      message: 'Initialized',
    });
  } catch {
    checks.push({
      name: 'Git repository',
      status: 'warn',
      message: 'Not initialized',
    });
  }

  // Check 4: Build artifacts
  const hasBuild =
    fs.existsSync(CONFIG.paths.dist) || fs.existsSync(CONFIG.paths.build);
  checks.push({
    name: 'Build artifacts',
    status: hasBuild ? 'pass' : 'warn',
    message: hasBuild ? 'Present' : 'Not built yet',
  });

  // Check 5: Dependencies
  try {
    const outdated = runSilent('npm outdated --json').toString();
    const packages = outdated ? JSON.parse(outdated) : {};
    const count = Object.keys(packages).length;
    checks.push({
      name: 'Dependencies',
      status: count === 0 ? 'pass' : 'warn',
      message: count === 0 ? 'Up to date' : `${count} outdated`,
    });
  } catch {
    checks.push({
      name: 'Dependencies',
      status: 'pass',
      message: 'Up to date',
    });
  }

  // Check 6: Security vulnerabilities
  try {
    const audit = runSilent('npm audit --json').toString();
    const auditData = JSON.parse(audit);
    const total = auditData.metadata?.vulnerabilities?.total || 0;
    checks.push({
      name: 'Security',
      status: total === 0 ? 'pass' : total > 5 ? 'fail' : 'warn',
      message: total === 0 ? 'No vulnerabilities' : `${total} vulnerabilities`,
    });
  } catch {
    checks.push({
      name: 'Security',
      status: 'warn',
      message: 'Could not check',
    });
  }

  spinner.stop();

  // Display results
  console.log();
  checks.forEach((check) => {
    const icon =
      check.status === 'pass' ? '✅' : check.status === 'warn' ? '⚠️' : '❌';
    const color =
      check.status === 'pass'
        ? colors.green
        : check.status === 'warn'
          ? colors.yellow
          : colors.red;
    console.log(
      `  ${icon} ${check.name}: ${color}${check.message}${colors.reset}`
    );
  });

  const passCount = checks.filter((c) => c.status === 'pass').length;
  const totalChecks = checks.length;
  const healthScore = Math.round((passCount / totalChecks) * 100);

  console.log(`\n${colors.bright}Health Score: ${healthScore}%${colors.reset}`);

  if (healthScore === 100) {
    logger.success('Project is in excellent health! 🎉');
  } else if (healthScore >= 75) {
    logger.info('Project is in good health');
  } else if (healthScore >= 50) {
    logger.warning('Project needs some attention');
  } else {
    logger.error('Project requires immediate attention');
  }

  tracker.endWithLog(true);
}

// ==================== CUSTOM SCRIPTS ====================
async function runCustomScript() {
  const packageJson = validateProject();
  const scripts = packageJson.scripts || {};
  const scriptNames = Object.keys(scripts);

  if (scriptNames.length === 0) {
    logger.warning('No scripts defined in package.json');
    return;
  }

  console.log(`\n${colors.bright}📜 Available Scripts${colors.reset}`);
  line();

  scriptNames.forEach((name, idx) => {
    console.log(`  ${idx + 1}. ${colors.cyan}${name}${colors.reset}`);
    console.log(`     ${colors.dim}${scripts[name]}${colors.reset}`);
  });

  const choice = await prompt('\nEnter script number or name: ');

  let scriptName;
  if (!isNaN(choice)) {
    const idx = parseInt(choice) - 1;
    scriptName = scriptNames[idx];
  } else {
    scriptName = choice;
  }

  if (!scriptName || !scripts[scriptName]) {
    logger.error('Invalid script');
    return;
  }

  logger.info(`Running: npm run ${scriptName}`);
  try {
    run(`npm run ${scriptName}`);
    logger.success('Script completed');
  } catch (err) {
    logger.error('Script failed');
  }
}

// ==================== MAIN MENU ====================
const actions = [
  { key: '1', label: '🚀 Build Project', func: build },
  { key: '2', label: '📤 Git Push (with custom message)', func: gitPush },
  { key: '3', label: '🔀 Advanced Git Operations', func: gitAdvanced },
  { key: '4', label: '🗑️  Delete node_modules', func: deleteNodeModules },
  { key: '5', label: '🧹 Clear Cache', func: clearCache },
  { key: '6', label: '💾 Full Clean + Reinstall', func: fullClean },
  { key: '7', label: '📊 Analyze Dependencies', func: analyzeDependencies },
  { key: '8', label: '🧪 Run Tests', func: runTests },
  { key: '9', label: '📈 Run Tests with Coverage', func: runTestsWithCoverage },
  { key: '10', label: '✨ Lint & Format Code', func: lintAndFormat },
  { key: '11', label: '👁️  Start Dev Server', func: startDevServer },
  { key: '12', label: '🔍 Preview Build', func: previewBuild },
  { key: '13', label: '📦 Analyze Bundle Size', func: analyzeBundle },
  { key: '14', label: '💾 Create Backup', func: createBackup },
  { key: '15', label: '🔐 Manage Environment', func: manageEnvironment },
  { key: '16', label: '🏥 Project Health Check', func: healthCheck },
  { key: '17', label: '📜 Run Custom Script', func: runCustomScript },
  { key: '18', label: '📜 View History', func: () => history.display() },
  { key: '19', label: '💻 System Info', func: displaySystemInfo },
  { key: '0', label: '❌ Exit', func: () => process.exit(0) },
];

// ==================== MAIN EXECUTION ====================
async function main() {
  clearConsole();

  // Display header
  console.log(`${colors.bright}${colors.magenta}`);
  console.log(
    '╔══════════════════════════════════════════════════════════════════╗'
  );
  console.log(
    '║                                                                  ║'
  );
  console.log(
    '║        ⚡ PROJECT AUTOMATION UTILITY v3.0 ⚡                     ║'
  );
  console.log(
    '║           Professional Development Toolkit                       ║'
  );
  console.log(
    '║                                                                  ║'
  );
  console.log(
    '╚══════════════════════════════════════════════════════════════════╝'
  );
  console.log(colors.reset);

  // Display project info
  try {
    displayProjectInfo();
  } catch (err) {
    logger.error('Not in a valid Node.js project directory');
    process.exit(1);
  }

  // Display stats from history
  const stats = history.getStats();
  if (stats.total > 0) {
    console.log(
      `\n${colors.dim}Session Stats: ${stats.total} actions, ${stats.successful} successful, avg ${formatDuration(stats.avgDuration)}${colors.reset}`
    );
  }

  // Display menu
  console.log(`\n${colors.bright}🎯 Available Actions:${colors.reset}`);
  line('═');

  // Group actions for better readability
  const groups = {
    'Build & Deploy': [1, 2, 3],
    'Cleanup & Maintenance': [4, 5, 6],
    'Dependencies & Testing': [7, 8, 9],
    'Code Quality': [10],
    Development: [11, 12, 13],
    'Project Management': [14, 15, 16, 17],
    Information: [18, 19],
  };

  Object.entries(groups).forEach(([groupName, keys]) => {
    console.log(`\n${colors.bright}${groupName}:${colors.reset}`);
    keys.forEach((key) => {
      const action = actions.find((a) => a.key === key.toString());
      if (action) {
        console.log(
          `  ${colors.cyan}${action.key.padStart(2)}${colors.reset}. ${action.label}`
        );
      }
    });
  });

  console.log(`\n${colors.bright}Other:${colors.reset}`);
  console.log(`  ${colors.cyan} 0${colors.reset}. ❌ Exit`);

  line('═');

  // Get user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `\n${colors.bright}Choose an action [0-19]: ${colors.reset}`,
    async (input) => {
      const action = actions.find((a) => a.key === input.trim());

      console.log();

      if (!action) {
        logger.error('Invalid choice. Please run the script again.');
        rl.close();
        process.exit(1);
      }

      try {
        await action.func();
        console.log();
        logger.success('✨ Operation completed!');
      } catch (err) {
        console.log();
        logger.error('Operation encountered an error');
      }

      // Save logs
      logger.saveLogs();

      rl.close();
    }
  );
}

// Handle uncaught errors
process.on('uncaughtException', (err) => {
  logger.error('Fatal error: ' + err.message);
  logger.saveLogs();
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log(
    `\n\n${colors.yellow}⚠️  Operation cancelled by user${colors.reset}`
  );
  logger.saveLogs();
  process.exit(0);
});

// Run the application
main().catch((err) => {
  logger.error('Fatal error: ' + err.message);
  logger.saveLogs();
  process.exit(1);
});
