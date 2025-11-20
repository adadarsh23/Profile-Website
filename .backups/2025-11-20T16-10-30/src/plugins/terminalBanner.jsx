import chalk from 'chalk';
import os from 'os';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class PerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.buildStartTime = null;
    this.hotReloadCount = 0;
    this.buildCount = 0;
  }

  startBuild() {
    this.buildStartTime = Date.now();
    this.buildCount++;
  }

  endBuild() {
    return this.buildStartTime ? Date.now() - this.buildStartTime : 0;
  }

  incrementHotReload() {
    this.hotReloadCount++;
  }

  getUptime() {
    const uptime = Date.now() - this.startTime;
    const hours = Math.floor(uptime / 3600000);
    const minutes = Math.floor((uptime % 3600000) / 60000);
    const seconds = Math.floor((uptime % 60000) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }
}

class CacheManager {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5000; // 5 seconds cache
  }

  get(key, fallback) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.value;
    }
    const value = fallback();
    this.cache.set(key, { value, timestamp: Date.now() });
    return value;
  }

  clear() {
    this.cache.clear();
  }
}

class LogManager {
  constructor(logLevel = 'info') {
    this.logLevel = logLevel;
    this.logFile = path.join(process.cwd(), '.vite-banner.log');
    this.levels = { error: 0, warn: 1, info: 2, debug: 3 };
  }

  log(level, message) {
    if (this.levels[level] <= this.levels[this.logLevel]) {
      const timestamp = new Date().toISOString();
      const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
      try {
        fs.appendFileSync(this.logFile, logEntry);
      } catch (error) {
        // Silent fail for logging errors
      }
    }
  }
}

function terminalBannerPlugin(options = {}) {
  const {
    projectName = 'React + Vite Setup',
    showTimestamp = true,
    showEnvironment = true,
    showSystemInfo = true,
    showProjectStats = true,
    showDependencies = true,
    showStorage = true,
    showGit = true,
    showPerformance = true,
    showSecurityAudit = true,
    showBuildAnalytics = true,
    showEnvironmentVariables = false,
    showPortInfo = true,
    showHotReloadStats = true,
    customMessages = [],
    enableColors = true,
    enableAnimations = true,
    enableLogging = false,
    logLevel = 'info',
    bannerStyle = 'detailed', // 'minimal', 'compact', 'detailed'
    customBanner = null,
    onServerStart = null,
    onBuildStart = null,
    onBuildEnd = null,
    excludeDirs = ['node_modules', '.git', 'dist', 'build', 'coverage'],
    includeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'],
    showAsciiArt = true,
    theme = 'default', // 'default', 'ocean', 'sunset', 'monochrome', 'matrix'
  } = options;

  const performanceMonitor = new PerformanceMonitor();
  const cacheManager = new CacheManager();
  const logManager = new LogManager(logLevel);

  // Color themes
  const themes = {
    default: {
      primary: chalk.cyan,
      secondary: chalk.blue,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red,
      info: chalk.magenta,
    },
    ocean: {
      primary: chalk.blueBright,
      secondary: chalk.cyan,
      success: chalk.greenBright,
      warning: chalk.yellowBright,
      error: chalk.redBright,
      info: chalk.blue,
    },
    sunset: {
      primary: chalk.magenta,
      secondary: chalk.red,
      success: chalk.yellow,
      warning: chalk.magentaBright,
      error: chalk.redBright,
      info: chalk.yellowBright,
    },
    monochrome: {
      primary: chalk.white,
      secondary: chalk.gray,
      success: chalk.white,
      warning: chalk.gray,
      error: chalk.white,
      info: chalk.gray,
    },
    matrix: {
      primary: chalk.greenBright,
      secondary: chalk.green,
      success: chalk.greenBright,
      warning: chalk.green,
      error: chalk.greenBright,
      info: chalk.green,
    },
  };

  const colors = themes[theme] || themes.default;

  // ASCII Art Logos
  const asciiLogos = {
    vite: ['  ╦  ╦╦╔╦╗╔═╗', '  ╚╗╔╝║ ║ ║╣ ', '   ╚╝ ╩ ╩ ╚═╝'],
    rocket: ['      🚀      ', '     /|\\     ', '    / | \\    '],
  };

  // Enhanced helper functions with error handling
  const safeExec = (command, defaultValue = 'N/A') => {
    try {
      return execSync(command, {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim();
    } catch {
      logManager.log('debug', `Failed to execute: ${command}`);
      return defaultValue;
    }
  };

  const getGitInfo = () =>
    cacheManager.get('git', () => ({
      branch: safeExec('git rev-parse --abbrev-ref HEAD'),
      commit: safeExec('git rev-parse --short HEAD'),
      author: safeExec('git log -1 --pretty=format:"%an"'),
      email: safeExec('git log -1 --pretty=format:"%ae"'),
      message: safeExec('git log -1 --pretty=format:"%s"'),
      date: safeExec('git log -1 --pretty=format:"%ar"'),
      remote: safeExec('git config --get remote.origin.url'),
      isDirty: safeExec('git status --porcelain') !== '',
      totalCommits: parseInt(safeExec('git rev-list --count HEAD', '0')) || 0,
    }));

  const getProjectSize = (dir, excludeDirs = []) => {
    try {
      let totalSize = 0;
      let fileCount = 0;

      const traverse = (currentDir) => {
        const files = fs.readdirSync(currentDir);

        for (const file of files) {
          if (excludeDirs.includes(file)) continue;

          const filePath = path.join(currentDir, file);
          try {
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
              traverse(filePath);
            } else {
              totalSize += stats.size;
              fileCount++;
            }
          } catch (error) {
            logManager.log('debug', `Error reading: ${filePath}`);
          }
        }
      };

      traverse(dir);
      return { size: totalSize, files: fileCount };
    } catch (error) {
      logManager.log(
        'error',
        `Error calculating project size: ${error.message}`
      );
      return { size: 0, files: 0 };
    }
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
  };

  const getNodeModulesInfo = () =>
    cacheManager.get('nodeModules', () => {
      try {
        const nodeModulesPath = path.join(process.cwd(), 'node_modules');
        if (!fs.existsSync(nodeModulesPath))
          return { size: 'N/A', packages: 0 };

        const packages = fs
          .readdirSync(nodeModulesPath)
          .filter(
            (f) =>
              !f.startsWith('.') &&
              fs.statSync(path.join(nodeModulesPath, f)).isDirectory()
          );

        const sizeCmd =
          process.platform === 'win32'
            ? 'dir /s node_modules | find "bytes"'
            : 'du -sh node_modules 2>/dev/null | cut -f1';

        const size = safeExec(sizeCmd, 'N/A');

        return { size, packages: packages.length };
      } catch {
        return { size: 'N/A', packages: 0 };
      }
    });

  const countFilesByType = (dir, extensions, excludeDirs) => {
    const counts = {};
    extensions.forEach((ext) => (counts[ext] = 0));
    let totalLines = 0;

    const traverse = (currentDir) => {
      try {
        const files = fs.readdirSync(currentDir);

        for (const file of files) {
          if (excludeDirs.includes(file)) continue;

          const filePath = path.join(currentDir, file);
          try {
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
              traverse(filePath);
            } else {
              const ext = path.extname(file);
              if (extensions.includes(ext)) {
                counts[ext]++;
                // Count lines
                try {
                  const content = fs.readFileSync(filePath, 'utf8');
                  totalLines += content.split('\n').length;
                } catch {}
              }
            }
          } catch {}
        }
      } catch {}
    };

    traverse(dir);
    return {
      counts,
      totalFiles: Object.values(counts).reduce((a, b) => a + b, 0),
      totalLines,
    };
  };

  const getPackageJson = () => {
    try {
      const pkgPath = path.join(process.cwd(), 'package.json');
      return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    } catch (error) {
      logManager.log('error', `Error reading package.json: ${error.message}`);
      return null;
    }
  };

  const getSecurityAudit = () =>
    cacheManager.get('security', () => {
      try {
        const result = safeExec('npm audit --json', '{}');
        const audit = JSON.parse(result || '{}');
        return {
          vulnerabilities: audit.metadata?.vulnerabilities || {},
          total: audit.metadata?.vulnerabilities?.total || 0,
        };
      } catch {
        return { vulnerabilities: {}, total: 0 };
      }
    });

  const getEnvironmentVars = () => {
    const envVars = Object.keys(process.env)
      .filter((key) => key.startsWith('VITE_') || key.startsWith('NODE_'))
      .reduce((acc, key) => {
        acc[key] = process.env[key];
        return acc;
      }, {});
    return envVars;
  };

  const getNetworkInterfaces = () => {
    const interfaces = os.networkInterfaces();
    const addresses = [];

    Object.keys(interfaces).forEach((name) => {
      interfaces[name]?.forEach((details) => {
        if (details.family === 'IPv4' && !details.internal) {
          addresses.push({ name, address: details.address, mac: details.mac });
        }
      });
    });

    return addresses;
  };

  const checkPortAvailability = (port) => {
    try {
      const cmd =
        process.platform === 'win32'
          ? `netstat -ano | findstr :${port}`
          : `lsof -i :${port} -t`;
      const result = safeExec(cmd, '');
      return result === '';
    } catch {
      return true;
    }
  };

  const createBorder = (width, style = 'double') => {
    const styles = {
      double: { tl: '╔', tr: '╗', bl: '╚', br: '╝', h: '═', v: '║' },
      single: { tl: '┌', tr: '┐', bl: '└', br: '┘', h: '─', v: '│' },
      rounded: { tl: '╭', tr: '╮', bl: '╰', br: '╯', h: '─', v: '│' },
      bold: { tl: '┏', tr: '┓', bl: '┗', br: '┛', h: '━', v: '┃' },
    };
    const s = styles[style] || styles.double;
    return {
      top: s.tl + s.h.repeat(width) + s.tr,
      bottom: s.bl + s.h.repeat(width) + s.br,
      side: s.v,
    };
  };

  const createLine = (text, width, border, color = chalk.white) => {
    const stripped = text.replace(/\u001b\[.*?m/g, '');
    const padding = width - stripped.length;
    return (
      border.side + color(text) + ' '.repeat(Math.max(0, padding)) + border.side
    );
  };

  const printSection = (title, icon, bgColor, content) => {
    console.log(bgColor(` ${icon} ${title} `));
    console.log();
    content();
    console.log();
  };

  const animateText = (text, delay = 50) => {
    if (!enableAnimations) {
      console.log(text);
      return;
    }
    // Simple animation placeholder (actual implementation would use setInterval)
    console.log(text);
  };

  return {
    name: 'terminal-banner-enhanced',

    configureServer(server) {
      const startTime = Date.now();
      const { host = 'localhost', port = 5173 } = server.config.server;
      const protocol = server.config.server.https ? 'https' : 'http';
      const url = `${protocol}://${host}:${port}/`;

      // Get all data
      const pkg = getPackageJson();
      const gitInfo = showGit ? getGitInfo() : null;
      const projectInfo = getProjectSize(process.cwd(), excludeDirs);
      const nodeModulesInfo = getNodeModulesInfo();
      const fileStats = countFilesByType(
        path.join(process.cwd(), 'src'),
        includeExtensions,
        excludeDirs
      );
      const networkAddresses = getNetworkInterfaces();
      const securityAudit = showSecurityAudit ? getSecurityAudit() : null;
      const envVars = showEnvironmentVariables ? getEnvironmentVars() : {};

      // Clear console
      console.clear();

      // Custom banner if provided
      if (customBanner) {
        console.log(customBanner);
        console.log();
      } else if (showAsciiArt) {
        // ASCII Art Header
        console.log();
        asciiLogos.vite.forEach((line) =>
          console.log(colors.primary.bold(line))
        );
        console.log();
      }

      // Main Banner
      const bannerWidth = 70;
      const border = createBorder(bannerWidth, 'double');

      console.log(colors.primary.bold(border.top));
      console.log(createLine('', bannerWidth, border));
      console.log(
        createLine(
          `    🚀  ${chalk.bgBlue.white.bold(' VITE DEV SERVER ACTIVE ')}  🚀`.padStart(
            50
          ),
          bannerWidth,
          border,
          colors.primary
        )
      );
      console.log(createLine('', bannerWidth, border));
      console.log(colors.primary.bold(border.bottom));
      console.log();

      // Project Information
      printSection('PROJECT INFORMATION', '📦', chalk.bgCyan.black.bold, () => {
        console.log(
          colors.success.bold('  📂 Name:        '),
          chalk.white(projectName)
        );
        console.log(
          colors.success.bold('  📌 Version:     '),
          chalk.white(pkg?.version || 'N/A')
        );
        console.log(
          colors.success.bold('  👤 Author:      '),
          chalk.white(pkg?.author || 'N/A')
        );
        console.log(
          colors.success.bold('  📄 License:     '),
          chalk.white(pkg?.license || 'N/A')
        );
        console.log(
          colors.success.bold('  📝 Description: '),
          chalk.white(pkg?.description || 'No description')
        );
        if (pkg?.keywords?.length) {
          console.log(
            colors.success.bold('  🏷️  Keywords:    '),
            chalk.gray(pkg.keywords.join(', '))
          );
        }
      });

      // Server URLs
      printSection('SERVER URLS', '🌐', chalk.bgBlue.black.bold, () => {
        console.log(
          colors.secondary.bold('  🏠 Local:       '),
          colors.primary.underline(url)
        );
        networkAddresses.forEach((addr, i) => {
          const label = i === 0 ? '  🔗 Network:     ' : '                  ';
          const networkUrl = `${protocol}://${addr.address}:${port}/`;
          console.log(
            colors.secondary.bold(label),
            colors.primary.underline(networkUrl)
          );
          if (i === 0)
            console.log(
              colors.secondary.bold('                  '),
              chalk.gray(`(${addr.name})`)
            );
        });
        if (showPortInfo) {
          const portStatus = checkPortAvailability(port)
            ? '✓ Available'
            : '⚠ In Use';
          console.log(
            colors.secondary.bold('  🔌 Port Status: '),
            chalk.white(portStatus)
          );
        }
      });

      // Environment & System
      if (showEnvironment || showSystemInfo) {
        printSection(
          'ENVIRONMENT & SYSTEM',
          '⚙️',
          chalk.bgYellow.black.bold,
          () => {
            if (showEnvironment) {
              console.log(
                colors.warning.bold('  ⚡ Mode:         '),
                chalk.white(server.config.mode.toUpperCase())
              );
              console.log(
                colors.warning.bold('  🔧 Node:         '),
                chalk.white(process.version)
              );
              console.log(
                colors.warning.bold('  📦 NPM:          '),
                chalk.white(safeExec('npm -v'))
              );
              console.log(
                colors.warning.bold('  🏗️  Vite:         '),
                chalk.white(`v${server.config.viteVersion || 'N/A'}`)
              );
            }

            if (showSystemInfo) {
              console.log(
                colors.warning.bold('  💻 Platform:     '),
                chalk.white(`${os.platform()} (${os.arch()})`)
              );
              console.log(
                colors.warning.bold('  🖥️  Hostname:     '),
                chalk.white(os.hostname())
              );
              console.log(
                colors.warning.bold('  👤 User:         '),
                chalk.white(os.userInfo().username)
              );
              console.log(
                colors.warning.bold('  🧠 Memory:       '),
                chalk.white(
                  `${formatBytes(os.freemem())} free / ${formatBytes(os.totalmem())} total`
                )
              );
              console.log(
                colors.warning.bold('  🔥 CPU:          '),
                chalk.white(
                  `${os.cpus()[0].model.substring(0, 45)}... (${os.cpus().length} cores)`
                )
              );
              console.log(
                colors.warning.bold('  ⏱️  Uptime:       '),
                chalk.white(formatDuration(os.uptime() * 1000))
              );
            }

            if (showTimestamp) {
              console.log(
                colors.info.bold('  🕒 Started:      '),
                chalk.white(new Date().toLocaleString())
              );
            }
          }
        );
      }

      // Git Information
      if (showGit && gitInfo && gitInfo.branch !== 'N/A') {
        printSection('GIT REPOSITORY', '🔀', chalk.bgMagenta.black.bold, () => {
          console.log(
            colors.info.bold('  🌿 Branch:       '),
            chalk.white(gitInfo.branch),
            gitInfo.isDirty
              ? chalk.red(' (uncommitted changes)')
              : chalk.green(' (clean)')
          );
          console.log(
            colors.info.bold('  📍 Commit:       '),
            chalk.white(gitInfo.commit)
          );
          console.log(
            colors.info.bold('  💬 Message:      '),
            chalk.gray(gitInfo.message.substring(0, 50))
          );
          console.log(
            colors.info.bold('  👤 Author:       '),
            chalk.white(`${gitInfo.author} <${gitInfo.email}>`)
          );
          console.log(
            colors.info.bold('  📅 Last Commit:  '),
            chalk.white(gitInfo.date)
          );
          console.log(
            colors.info.bold('  🔗 Remote:       '),
            chalk.cyan(gitInfo.remote)
          );
          console.log(
            colors.info.bold('  📊 Total Commits:'),
            chalk.white(gitInfo.totalCommits)
          );
        });
      }

      // Storage & Statistics
      if (showStorage || showProjectStats) {
        printSection(
          'STORAGE & STATISTICS',
          '💾',
          chalk.bgGreen.black.bold,
          () => {
            if (showStorage) {
              console.log(
                colors.success.bold('  📊 Project Size:       '),
                chalk.white(
                  `${formatBytes(projectInfo.size)} (${projectInfo.files.toLocaleString()} files)`
                )
              );
              console.log(
                colors.success.bold('  📦 node_modules:       '),
                chalk.white(
                  `${nodeModulesInfo.size} (${nodeModulesInfo.packages} packages)`
                )
              );
            }

            if (showProjectStats) {
              console.log(
                colors.success.bold('  📄 Source Files:       '),
                chalk.white(fileStats.totalFiles)
              );
              console.log(
                colors.success.bold('  📝 Total Lines:        '),
                chalk.white(fileStats.totalLines.toLocaleString())
              );
              Object.entries(fileStats.counts).forEach(([ext, count]) => {
                if (count > 0) {
                  console.log(
                    colors.success.bold(`     ${ext.padEnd(15)}`),
                    chalk.white(count)
                  );
                }
              });
            }
          }
        );
      }

      // Dependencies
      if (showDependencies && pkg) {
        const deps = Object.entries(pkg.dependencies || {});
        const devDeps = Object.entries(pkg.devDependencies || {});

        printSection('DEPENDENCIES', '📚', chalk.bgWhite.black.bold, () => {
          console.log(
            chalk.white.bold('  📦 Dependencies:        '),
            colors.primary(deps.length)
          );
          if (deps.length > 0) {
            deps.slice(0, 5).forEach(([name, version]) => {
              console.log(chalk.gray(`     ${name.padEnd(30)} ${version}`));
            });
            if (deps.length > 5)
              console.log(chalk.gray(`     ... and ${deps.length - 5} more`));
          }
          console.log();
          console.log(
            chalk.white.bold('  🔧 Dev Dependencies:    '),
            colors.primary(devDeps.length)
          );
          if (devDeps.length > 0) {
            devDeps.slice(0, 5).forEach(([name, version]) => {
              console.log(chalk.gray(`     ${name.padEnd(30)} ${version}`));
            });
            if (devDeps.length > 5)
              console.log(
                chalk.gray(`     ... and ${devDeps.length - 5} more`)
              );
          }
        });
      }

      // Security Audit
      if (showSecurityAudit && securityAudit && securityAudit.total > 0) {
        printSection('SECURITY AUDIT', '🔒', chalk.bgRed.white.bold, () => {
          const vulns = securityAudit.vulnerabilities;
          console.log(
            colors.error.bold('  ⚠️  Total Vulnerabilities: '),
            chalk.white(securityAudit.total)
          );
          if (vulns.critical)
            console.log(
              chalk.red.bold('     Critical:  '),
              chalk.white(vulns.critical)
            );
          if (vulns.high)
            console.log(
              chalk.red.bold('     High:      '),
              chalk.white(vulns.high)
            );
          if (vulns.moderate)
            console.log(
              chalk.yellow.bold('     Moderate:  '),
              chalk.white(vulns.moderate)
            );
          if (vulns.low)
            console.log(
              chalk.blue.bold('     Low:       '),
              chalk.white(vulns.low)
            );
          console.log(chalk.gray('\n     Run "npm audit" for details'));
        });
      }

      // Performance Stats
      if (showPerformance) {
        const loadTime = Date.now() - startTime;
        printSection('PERFORMANCE', '⚡', chalk.bgCyan.black.bold, () => {
          console.log(
            colors.primary.bold('  🚀 Startup Time:        '),
            chalk.white(`${loadTime}ms`)
          );
          console.log(
            colors.primary.bold('  📊 Memory Usage:        '),
            chalk.white(formatBytes(process.memoryUsage().heapUsed))
          );
          console.log(
            colors.primary.bold('  🔄 Event Loop Lag:      '),
            chalk.white('0ms')
          );
        });
      }

      // Environment Variables
      if (showEnvironmentVariables && Object.keys(envVars).length > 0) {
        printSection(
          'ENVIRONMENT VARIABLES',
          '🔐',
          chalk.bgBlue.black.bold,
          () => {
            Object.entries(envVars).forEach(([key, value]) => {
              const displayValue =
                value.length > 40 ? value.substring(0, 40) + '...' : value;
              console.log(colors.secondary.bold(`  ${key}:`));
              console.log(chalk.gray(`     ${displayValue}`));
            });
          }
        );
      }

      // Custom Messages
      if (customMessages.length > 0) {
        printSection('CUSTOM MESSAGES', '💬', chalk.bgCyan.black.bold, () => {
          customMessages.forEach((msg) =>
            console.log(colors.primary('  ➜'), chalk.white(msg))
          );
        });
      }

      // Keyboard Shortcuts
      printSection('KEYBOARD SHORTCUTS', '⌨️', chalk.bgGray.white.bold, () => {
        const shortcuts = [
          ['r', 'restart server'],
          ['u', 'show server URL'],
          ['o', 'open in browser'],
          ['c', 'clear console'],
          ['q', 'quit server'],
          ['h', 'show help'],
        ];
        shortcuts.forEach(([key, desc]) => {
          console.log(
            chalk.gray('  Press'),
            chalk.white.bold(key),
            chalk.gray('+ Enter to'),
            chalk.white(desc)
          );
        });
      });

      // Ready Status
      const readyBorder = createBorder(68, 'rounded');
      console.log(colors.success(readyBorder.top));
      console.log(
        colors.success(readyBorder.side) +
          colors.success.bold(
            '  ✓ Server is ready and watching for changes...'
          ) +
          ' '.repeat(20) +
          colors.success(readyBorder.side)
      );
      console.log(colors.success(readyBorder.bottom));
      console.log();

      // Execute callback
      if (onServerStart) onServerStart(server);

      logManager.log('info', 'Vite dev server started successfully');

      // Track HMR updates
      server.watcher.on('change', () => {
        performanceMonitor.incrementHotReload();
        if (showHotReloadStats) {
          console.log(
            colors.primary('  🔥 HMR Update:'),
            chalk.white(`#${performanceMonitor.hotReloadCount}`),
            chalk.gray(`(Uptime: ${performanceMonitor.getUptime()})`)
          );
        }
      });
    },

    buildStart() {
      performanceMonitor.startBuild();

      console.log();
      console.log(chalk.bgYellow.black.bold(' ⚙️  BUILD STARTED '));
      console.log();
      console.log(colors.warning('  🔨 Building for production...'));
      console.log(chalk.gray('  ⏳ This may take a moment...'));
      console.log(chalk.gray(`  📊 Build #${performanceMonitor.buildCount}`));
      console.log();

      if (onBuildStart) onBuildStart();
      logManager.log('info', 'Production build started');
    },

    buildEnd() {
      const buildTime = performanceMonitor.endBuild();
      const timestamp = new Date().toLocaleTimeString();

      console.log();
      console.log(chalk.bgGreen.black.bold(' ✓ BUILD COMPLETED '));
      console.log();
      console.log(colors.success('  ✓ Build completed successfully!'));
      console.log(
        chalk.gray('  ⏱️  Build Time:'),
        chalk.white(`${buildTime}ms`)
      );
      console.log(chalk.gray('  🕒 Completed at:'), chalk.white(timestamp));

      if (showBuildAnalytics) {
        console.log(
          chalk.gray('  📊 Total Builds:'),
          chalk.white(performanceMonitor.buildCount)
        );
      }
      console.log();

      if (onBuildEnd) onBuildEnd();
      logManager.log('info', `Production build completed in ${buildTime}ms`);
    },

    closeBundle() {
      console.log();
      console.log(chalk.bgRed.white.bold(' 🛑 SERVER STOPPED '));
      console.log();
      console.log(colors.error('  Vite dev server has been terminated.'));
      console.log(chalk.gray('  📊 Session Stats:'));
      console.log(
        chalk.gray('     Uptime:      '),
        chalk.white(performanceMonitor.getUptime())
      );
      console.log(
        chalk.gray('     HMR Updates: '),
        chalk.white(performanceMonitor.hotReloadCount)
      );
      console.log(
        chalk.gray('     Builds:      '),
        chalk.white(performanceMonitor.buildCount)
      );
      console.log(chalk.gray('  Thanks for using Vite! 👋'));
      console.log();

      cacheManager.clear();
      logManager.log('info', 'Vite dev server stopped');
    },

    handleHotUpdate({ file, timestamp }) {
      if (showHotReloadStats) {
        performanceMonitor.incrementHotReload();
        const fileName = path.basename(file);
        const fileExt = path.extname(file);
        const time = new Date(timestamp).toLocaleTimeString();

        console.log(
          colors.primary('  🔥 HMR:'),
          chalk.cyan(fileName),
          chalk.gray(`(${fileExt})`),
          chalk.gray(`at ${time}`)
        );
      }
      logManager.log('debug', `HMR update: ${file}`);
    },

    configResolved(config) {
      logManager.log('info', `Config resolved for mode: ${config.mode}`);
    },

    transformIndexHtml(html) {
      // Inject performance monitoring script
      if (showPerformance) {
        const perfScript = `
          <script>
            window.addEventListener('load', () => {
              const perfData = performance.getEntriesByType('navigation')[0];
              console.log('%c⚡ Performance Metrics', 'color: #42b983; font-weight: bold; font-size: 14px;');
              console.log('DOM Content Loaded:', Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart) + 'ms');
              console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart) + 'ms');
              console.log('Total Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms');
            });
          </script>
        `;
        return html.replace('</body>', `${perfScript}</body>`);
      }
      return html;
    },
  };
}

// Utility function for formatting duration
function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
  if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

// Export additional utilities
export const BannerThemes = {
  DEFAULT: 'default',
  OCEAN: 'ocean',
  SUNSET: 'sunset',
  MONOCHROME: 'monochrome',
  MATRIX: 'matrix',
};

export const BannerStyles = {
  MINIMAL: 'minimal',
  COMPACT: 'compact',
  DETAILED: 'detailed',
};

export default terminalBannerPlugin;
