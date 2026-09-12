import chalk from 'chalk';
import os from 'os';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/**
 * Access the Node/global process safely without throwing in edge environments.
 */
export const getRuntimeProcess = () => {
  if (typeof globalThis !== 'undefined' && globalThis.process) {
    return globalThis.process;
  }
  return undefined;
};

const getWorkspaceRoot = () => {
  const runtime = getRuntimeProcess();
  if (runtime?.cwd) return runtime.cwd();
  return '.';
};

const getRuntimeEnv = () => {
  const runtime = getRuntimeProcess();
  return runtime?.env ?? {};
};

/**
 * Strip ANSI escape codes to accurately calculate string display width.
 */
/* eslint-disable no-control-regex */
const ANSI_REGEX =
  /\u001b\[[0-9;]*[a-zA-Z]|\u001b\]8;;.*?\u0007|\u001b\]8;;\u0007/g;
/* eslint-enable no-control-regex */

const stripAnsi = (str) => {
  if (typeof str !== 'string') return '';
  return str.replace(ANSI_REGEX, '');
};

const getDisplayWidth = (str) => stripAnsi(str).length;

/**
 * Format bytes into human-readable representation.
 */
export const formatBytes = (bytes, decimals = 2) => {
  if (!bytes || bytes <= 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const clampedIndex = Math.min(i, sizes.length - 1);
  return `${parseFloat((bytes / Math.pow(k, clampedIndex)).toFixed(decimals))} ${sizes[clampedIndex]}`;
};

/**
 * Utility function for formatting duration.
 */
export function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
  if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

/**
 * Render a mini horizontal bar meter (e.g. [████████░░░░] 65%).
 */
const renderProgressBar = (
  fraction,
  length = 12,
  filledChar = '█',
  emptyChar = '░'
) => {
  const clamped = Math.max(
    0,
    Math.min(1, Number.isFinite(fraction) ? fraction : 0)
  );
  const filledCount = Math.round(clamped * length);
  const emptyCount = Math.max(0, length - filledCount);
  const pct = Math.round(clamped * 100);
  return `${filledChar.repeat(filledCount)}${emptyChar.repeat(emptyCount)} ${pct}%`;
};

/**
 * Wrap a URL with an OSC 8 terminal hyperlink if terminal supports it.
 */
const formatTerminalLink = (url, label) => {
  const linkText = label || url;
  const runtime = getRuntimeProcess();
  // Most modern terminals (VS Code, iTerm, Windows Terminal, Warp) support OSC 8 hyperlinks
  const isHyperlinkSupported =
    runtime?.env?.WT_SESSION ||
    runtime?.env?.VSCODE_PID ||
    runtime?.env?.TERM_PROGRAM === 'vscode' ||
    runtime?.env?.TERM_PROGRAM === 'iTerm.app' ||
    runtime?.env?.TERM_PROGRAM === 'WarpTerminal';

  if (isHyperlinkSupported) {
    return `\u001b]8;;${url}\u0007${linkText}\u001b]8;;\u0007`;
  }
  return linkText;
};

class PerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.buildStartTime = null;
    this.hotReloadCount = 0;
    this.buildCount = 0;
    this.lastHotReloadTime = Date.now();
    this.hotspotFiles = new Map();
  }

  startBuild() {
    this.buildStartTime = Date.now();
    this.buildCount++;
  }

  endBuild() {
    return this.buildStartTime ? Date.now() - this.buildStartTime : 0;
  }

  recordHotReload(filePath) {
    this.hotReloadCount++;
    const now = Date.now();
    const delta = now - this.lastHotReloadTime;
    this.lastHotReloadTime = now;

    if (filePath) {
      const current = this.hotspotFiles.get(filePath) || 0;
      this.hotspotFiles.set(filePath, current + 1);
    }

    return delta;
  }

  getTopHotspots(limit = 3) {
    return Array.from(this.hotspotFiles.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
  }

  getUptime() {
    return formatDuration(Date.now() - this.startTime);
  }
}

class CacheManager {
  constructor(defaultTimeout = 5000) {
    this.cache = new Map();
    this.cacheTimeout = defaultTimeout;
  }

  get(key, fallback, timeout = this.cacheTimeout) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < timeout) {
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
    this.logFile = path.join(getWorkspaceRoot(), '.vite-banner.log');
    this.levels = { error: 0, warn: 1, info: 2, debug: 3 };
  }

  log(level, message) {
    if (this.levels[level] <= this.levels[this.logLevel]) {
      const timestamp = new Date().toISOString();
      const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
      try {
        fs.appendFileSync(this.logFile, logEntry);
      } catch {
        // Silent catch
      }
    }
  }
}

// Color Palettes & Themes
export const BannerThemes = {
  DEFAULT: 'default',
  CYBERPUNK: 'cyberpunk',
  SYNTHWAVE: 'synthwave',
  TOKYO_NIGHT: 'tokyo-night',
  AURORA: 'aurora',
  MATRIX: 'matrix',
  SUNSET: 'sunset',
  OCEAN: 'ocean',
  DRACULA: 'dracula',
  FIRE: 'fire',
  MONOCHROME: 'monochrome',
};

export const BannerStyles = {
  DETAILED: 'detailed',
  COMPACT: 'compact',
  MINIMAL: 'minimal',
  DASHBOARD: 'dashboard',
};

export function terminalBannerPlugin(options = {}) {
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
    showMediaStats = true,
    showHmrHotspots = true,
    artStyle = 'music', // 'vite', 'music', 'react', 'rocket', 'minimal'
    customMessages = [],
    enableColors = true,
    enableLogging = false,
    logLevel = 'info',
    bannerStyle = BannerStyles.DETAILED,
    boxStyle = 'rounded', // 'rounded', 'double', 'single', 'bold', 'heavy', 'minimal'
    customBanner = null,
    onServerStart = null,
    onBuildStart = null,
    onBuildEnd = null,
    excludeDirs = [
      'node_modules',
      '.git',
      'dist',
      'build',
      'coverage',
      '.cache',
    ],
    includeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'],
    showAsciiArt = true,
    clearScreen = true,
    theme = BannerThemes.DEFAULT,
  } = options;

  const performanceMonitor = new PerformanceMonitor();
  const cacheManager = new CacheManager();
  const logManager = enableLogging ? new LogManager(logLevel) : null;

  const logMsg = (lvl, msg) => logManager?.log(lvl, msg);

  // Theme definitions with vivid, balanced styling
  const themes = {
    default: {
      primary: chalk.cyan,
      secondary: chalk.blueBright,
      accent: chalk.magentaBright,
      success: chalk.greenBright,
      warning: chalk.yellowBright,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.whiteBright.bold,
      tagBg: chalk.bgCyan.black.bold,
      subTagBg: chalk.bgBlue.white.bold,
    },
    cyberpunk: {
      primary: chalk.yellowBright,
      secondary: chalk.cyanBright,
      accent: chalk.magentaBright,
      success: chalk.greenBright,
      warning: chalk.yellow,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.yellowBright.bold,
      tagBg: chalk.bgYellow.black.bold,
      subTagBg: chalk.bgMagenta.black.bold,
    },
    synthwave: {
      primary: chalk.magentaBright,
      secondary: chalk.cyanBright,
      accent: chalk.blueBright,
      success: chalk.greenBright,
      warning: chalk.yellowBright,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.white.bold,
      tagBg: chalk.bgMagenta.black.bold,
      subTagBg: chalk.bgCyan.black.bold,
    },
    'tokyo-night': {
      primary: chalk.blueBright,
      secondary: chalk.cyan,
      accent: chalk.magenta,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red,
      muted: chalk.gray,
      highlight: chalk.white.bold,
      tagBg: chalk.bgBlue.white.bold,
      subTagBg: chalk.bgCyan.black.bold,
    },
    aurora: {
      primary: chalk.greenBright,
      secondary: chalk.cyanBright,
      accent: chalk.blueBright,
      success: chalk.green,
      warning: chalk.yellowBright,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.whiteBright.bold,
      tagBg: chalk.bgGreen.black.bold,
      subTagBg: chalk.bgCyan.black.bold,
    },
    matrix: {
      primary: chalk.greenBright,
      secondary: chalk.green,
      accent: chalk.greenBright,
      success: chalk.greenBright,
      warning: chalk.green,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.white.bold,
      tagBg: chalk.bgGreen.black.bold,
      subTagBg: chalk.bgBlack.greenBright.bold,
    },
    sunset: {
      primary: chalk.redBright,
      secondary: chalk.yellowBright,
      accent: chalk.magentaBright,
      success: chalk.greenBright,
      warning: chalk.yellow,
      error: chalk.red,
      muted: chalk.gray,
      highlight: chalk.yellowBright.bold,
      tagBg: chalk.bgRedBright.black.bold,
      subTagBg: chalk.bgYellow.black.bold,
    },
    ocean: {
      primary: chalk.blueBright,
      secondary: chalk.cyanBright,
      accent: chalk.cyan,
      success: chalk.greenBright,
      warning: chalk.yellowBright,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.white.bold,
      tagBg: chalk.bgBlue.white.bold,
      subTagBg: chalk.bgCyan.black.bold,
    },
    dracula: {
      primary: chalk.magenta,
      secondary: chalk.cyan,
      accent: chalk.yellowBright,
      success: chalk.greenBright,
      warning: chalk.yellow,
      error: chalk.redBright,
      muted: chalk.gray,
      highlight: chalk.whiteBright.bold,
      tagBg: chalk.bgMagenta.black.bold,
      subTagBg: chalk.bgCyan.black.bold,
    },
    fire: {
      primary: chalk.redBright,
      secondary: chalk.yellowBright,
      accent: chalk.red,
      success: chalk.greenBright,
      warning: chalk.yellowBright,
      error: chalk.red,
      muted: chalk.gray,
      highlight: chalk.whiteBright.bold,
      tagBg: chalk.bgRed.white.bold,
      subTagBg: chalk.bgYellow.black.bold,
    },
    monochrome: {
      primary: chalk.white,
      secondary: chalk.gray,
      accent: chalk.whiteBright,
      success: chalk.white,
      warning: chalk.gray,
      error: chalk.whiteBright,
      muted: chalk.gray,
      highlight: chalk.white.bold,
      tagBg: chalk.bgWhite.black.bold,
      subTagBg: chalk.bgGray.white.bold,
    },
  };

  const activeTheme = enableColors
    ? themes[theme] || themes.default
    : {
        primary: (t) => t,
        secondary: (t) => t,
        accent: (t) => t,
        success: (t) => t,
        warning: (t) => t,
        error: (t) => t,
        muted: (t) => t,
        highlight: (t) => t,
        tagBg: (t) => t,
        subTagBg: (t) => t,
      };

  const safeExec = (command, defaultValue = 'N/A') => {
    try {
      return execSync(command, {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim();
    } catch {
      logMsg('debug', `Failed to execute: ${command}`);
      return defaultValue;
    }
  };

  /**
   * Determine terminal width gracefully.
   */
  const getTerminalWidth = () => {
    const runtime = getRuntimeProcess();
    const columns = runtime?.stdout?.columns;
    if (!columns || typeof columns !== 'number') return 76;
    return Math.max(68, Math.min(94, columns - 4));
  };

  /**
   * Box drawing character sets.
   */
  const getBorders = (style = 'rounded') => {
    const borders = {
      rounded: {
        tl: '╭',
        tr: '╮',
        bl: '╰',
        br: '╯',
        h: '─',
        v: '│',
        ml: '├',
        mr: '┤',
      },
      double: {
        tl: '╔',
        tr: '╗',
        bl: '╚',
        br: '╝',
        h: '═',
        v: '║',
        ml: '╠',
        mr: '╣',
      },
      single: {
        tl: '┌',
        tr: '┐',
        bl: '└',
        br: '┘',
        h: '─',
        v: '│',
        ml: '├',
        mr: '┤',
      },
      bold: {
        tl: '┏',
        tr: '┓',
        bl: '┗',
        br: '┛',
        h: '━',
        v: '┃',
        ml: '┣',
        mr: '┫',
      },
      heavy: {
        tl: '▛',
        tr: '▜',
        bl: '▙',
        br: '▟',
        h: '▀',
        v: '▌',
        ml: '▌',
        mr: '▐',
      },
      minimal: {
        tl: '+',
        tr: '+',
        bl: '+',
        br: '+',
        h: '-',
        v: '|',
        ml: '+',
        mr: '+',
      },
    };
    return borders[style] || borders.rounded;
  };

  const createLine = (content, width, border, colorFn = (t) => t) => {
    const rawLen = getDisplayWidth(content);
    const padding = Math.max(0, width - rawLen - 2);
    return `${colorFn(border.v)} ${content}${' '.repeat(padding)}${colorFn(border.v)}`;
  };

  const printBoxedCard = (
    title,
    icon,
    rows,
    cardWidth,
    cardBorder,
    colorFn
  ) => {
    const b = cardBorder;
    const innerWidth = cardWidth - 2;

    const titlePrefix = ` ${icon} ${title} `;
    const titleLen = getDisplayWidth(titlePrefix);
    const topBarLen = Math.max(0, innerWidth - titleLen - 2);
    const topBorder = `${b.tl}${b.h}${colorFn.tagBg(titlePrefix)}${b.h.repeat(topBarLen)}${b.tr}`;

    console.log(colorFn.primary(topBorder));
    rows.forEach((row) => {
      console.log(createLine(row, cardWidth, b, colorFn.primary));
    });
    console.log(colorFn.primary(`${b.bl}${b.h.repeat(innerWidth)}${b.br}`));
  };

  /**
   * Deep Git Repository Telemetry.
   */
  const getGitInfo = () =>
    cacheManager.get('gitInfo', () => {
      try {
        const branch = safeExec('git rev-parse --abbrev-ref HEAD', '');
        if (!branch) return null;

        const rawLog = safeExec(
          'git log -1 --format="%h###%an###%ae###%s###%ar"',
          ''
        );
        const [commit, author, email, message, date] = rawLog
          ? rawLog.split('###')
          : ['HEAD', 'Unknown', '', '', ''];

        const remote =
          safeExec('git remote get-url origin', '') ||
          safeExec('git config --get remote.origin.url', '');

        const totalCommitsRaw = safeExec('git rev-list --count HEAD', '');
        const totalCommits = totalCommitsRaw
          ? parseInt(totalCommitsRaw, 10)
          : 0;

        const statusRaw = safeExec('git status --porcelain', '');
        const statusLines = statusRaw
          ? statusRaw.split('\n').filter(Boolean)
          : [];
        const isDirty = statusLines.length > 0;
        const modifiedCount = statusLines.filter(
          (l) => l.startsWith(' M') || l.startsWith('M ')
        ).length;
        const untrackedCount = statusLines.filter((l) =>
          l.startsWith('??')
        ).length;

        const latestTag = safeExec('git describe --tags --abbrev=0', '');

        return {
          branch: branch || 'main',
          commit: commit || 'N/A',
          author: author || 'N/A',
          email: email || '',
          message: message || '',
          date: date || '',
          remote: remote || 'Local repository',
          isDirty,
          modifiedCount,
          untrackedCount,
          totalCommits: totalCommits || 'N/A',
          tag: latestTag || null,
        };
      } catch (err) {
        logMsg('debug', `Git inspection failed: ${err.message}`);
        return null;
      }
    });

  /**
   * Media & Codebase Statistics (Includes Audio & 3D models for music portfolios).
   */
  const getCodebaseStats = (workspaceDir, extensions, excludes) =>
    cacheManager.get(
      'codebaseStats',
      () => {
        const counts = {};
        extensions.forEach((ext) => {
          counts[ext] = 0;
        });

        let totalLines = 0;
        let totalFiles = 0;
        let totalBytes = 0;

        const mediaStats = {
          audio: { count: 0, size: 0 },
          models3d: { count: 0, size: 0 },
          images: { count: 0, size: 0 },
        };

        const audioExts = new Set([
          '.mp3',
          '.wav',
          '.ogg',
          '.flac',
          '.m4a',
          '.aac',
        ]);
        const modelExts = new Set(['.glb', '.gltf', '.bin', '.obj', '.fbx']);
        const imageExts = new Set([
          '.png',
          '.jpg',
          '.jpeg',
          '.webp',
          '.svg',
          '.hdr',
          '.gif',
          '.ico',
        ]);

        const traverse = (currentDir) => {
          try {
            if (!fs.existsSync(currentDir)) return;
            const entries = fs.readdirSync(currentDir, { withFileTypes: true });

            for (const entry of entries) {
              const name = entry.name;
              if (excludes.includes(name) || name.startsWith('.')) continue;

              const fullPath = path.join(currentDir, name);

              if (entry.isDirectory()) {
                traverse(fullPath);
              } else if (entry.isFile()) {
                try {
                  const stat = fs.statSync(fullPath);
                  totalBytes += stat.size;
                  totalFiles++;

                  const ext = path.extname(name).toLowerCase();

                  if (extensions.includes(ext)) {
                    counts[ext] = (counts[ext] || 0) + 1;
                    try {
                      const content = fs.readFileSync(fullPath, 'utf8');
                      totalLines += content.split('\n').length;
                    } catch {
                      // Ignore binary/read errors
                    }
                  }

                  if (audioExts.has(ext)) {
                    mediaStats.audio.count++;
                    mediaStats.audio.size += stat.size;
                  } else if (modelExts.has(ext)) {
                    mediaStats.models3d.count++;
                    mediaStats.models3d.size += stat.size;
                  } else if (imageExts.has(ext)) {
                    mediaStats.images.count++;
                    mediaStats.images.size += stat.size;
                  }
                } catch {
                  // Ignore stat errors
                }
              }
            }
          } catch {
            // Ignore traverse errors
          }
        };

        traverse(workspaceDir);

        return {
          totalFiles,
          totalBytes,
          totalLines,
          counts,
          mediaStats,
        };
      },
      10000
    );

  /**
   * Component & Architecture Inventory.
   */
  const getArchitectureStats = (rootPath) =>
    cacheManager.get('archStats', () => {
      const countInDir = (relDir) => {
        const fullDir = path.join(rootPath, relDir);
        if (!fs.existsSync(fullDir)) return 0;
        try {
          return fs
            .readdirSync(fullDir)
            .filter(
              (f) =>
                !f.startsWith('.') &&
                fs.statSync(path.join(fullDir, f)).isFile()
            ).length;
        } catch {
          return 0;
        }
      };

      return {
        components: countInDir('src/components'),
        pages: countInDir('src/pages'),
        hooks: countInDir('src/hooks'),
        plugins: countInDir('src/plugins'),
      };
    });

  const getNodeModulesInfo = () =>
    cacheManager.get('nodeModules', () => {
      try {
        const nodeModulesPath = path.join(getWorkspaceRoot(), 'node_modules');
        if (!fs.existsSync(nodeModulesPath))
          return { size: '0 B', packages: 0 };

        const packages = fs
          .readdirSync(nodeModulesPath)
          .filter(
            (f) =>
              !f.startsWith('.') &&
              fs.statSync(path.join(nodeModulesPath, f)).isDirectory()
          );

        return {
          size: `${packages.length * 1.5 > 100 ? '~' : ''}${Math.round(packages.length * 1.2)} MB`,
          packages: packages.length,
        };
      } catch {
        return { size: 'N/A', packages: 0 };
      }
    });

  const getPackageJson = () =>
    cacheManager.get('packageJson', () => {
      try {
        const pkgPath = path.join(getWorkspaceRoot(), 'package.json');
        return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      } catch {
        return null;
      }
    });

  const getSecurityAudit = () =>
    cacheManager.get(
      'securityAudit',
      () => {
        try {
          const raw = safeExec('npm audit --json', '');
          if (!raw) return null;
          const parsed = JSON.parse(raw);
          const vulns = parsed.metadata?.vulnerabilities || {};
          return {
            total: vulns.total || 0,
            critical: vulns.critical || 0,
            high: vulns.high || 0,
            moderate: vulns.moderate || 0,
            low: vulns.low || 0,
          };
        } catch {
          return null;
        }
      },
      60000
    );

  const getNetworkInterfaces = () => {
    const interfaces = os.networkInterfaces();
    const addresses = [];

    Object.keys(interfaces).forEach((name) => {
      interfaces[name]?.forEach((details) => {
        if (details.family === 'IPv4' && !details.internal) {
          addresses.push({ name, address: details.address });
        }
      });
    });

    return addresses;
  };

  /**
   * Detect package manager and terminal environment.
   */
  const detectEnvironment = () => {
    const runtime = getRuntimeProcess();
    const env = getRuntimeEnv();
    const userAgent = env.npm_config_user_agent || '';

    let pm = 'npm';
    if (userAgent.startsWith('pnpm')) pm = 'pnpm';
    else if (userAgent.startsWith('yarn')) pm = 'yarn';
    else if (userAgent.startsWith('bun')) pm = 'bun';

    let terminalName = 'Terminal';
    if (env.VSCODE_PID || env.TERM_PROGRAM === 'vscode')
      terminalName = 'VS Code';
    else if (env.WT_SESSION) terminalName = 'Windows Terminal';
    else if (env.TERM_PROGRAM) terminalName = env.TERM_PROGRAM;
    else if (runtime?.platform === 'win32') terminalName = 'PowerShell / CMD';

    return { packageManager: pm, terminal: terminalName };
  };

  /**
   * Render ASCII Hero Art.
   */
  const renderAsciiHero = (style) => {
    const c = activeTheme;
    if (style === 'music') {
      return [
        c.accent('   ♫ ılıll|̲̅̅●̲̅|̲̅̅=̲̅̅|̲̅̅●̲̅|llılı ♫'),
        c.primary.bold('   ÂD ADARSH MUSIC PORTFOLIO') +
          c.muted(' • 3D Web Audio Experience'),
      ];
    }

    if (style === 'vite') {
      return [
        c.primary.bold('    ╦  ╦╦╔╦╗╔═╗') +
          c.secondary.bold('  ⚡ LIGHTNING FAST HMR'),
        c.primary.bold('    ╚╗╔╝║ ║ ║╣ ') +
          c.muted('   Next-Gen Frontend Tooling'),
        c.primary.bold('     ╚╝ ╩ ╩ ╚═╝'),
      ];
    }

    if (style === 'react') {
      return [
        c.primary('        .---.       '),
        c.primary('       /   / \\      ') +
          c.primary.bold('REACT 19 + VITE 6'),
        c.primary('      |   (   )     ') +
          c.muted('High Performance Reactive Architecture'),
        c.primary('       \\   \\ /      '),
        c.primary("        '---'       "),
      ];
    }

    if (style === 'rocket') {
      return [
        c.accent('          🚀'),
        c.primary.bold('         /|\\         ') +
          c.success.bold('DEV SERVER ONLINE'),
        c.primary('        / | \\        '),
      ];
    }

    // Minimal
    return [
      c.tagBg(' VITE DEV ') +
        ' ' +
        c.highlight(projectName) +
        ' ' +
        c.muted(`v${getPackageJson()?.version || '0.1.0'}`),
    ];
  };

  const getEnvironmentVars = () => {
    const runtimeEnv = getRuntimeEnv();
    return Object.keys(runtimeEnv)
      .filter((key) => key.startsWith('VITE_') || key.startsWith('NODE_'))
      .reduce((acc, key) => {
        acc[key] = runtimeEnv[key];
        return acc;
      }, {});
  };

  return {
    name: 'terminal-banner-enhanced',

    configureServer(server) {
      setTimeout(() => {
        const width = getTerminalWidth();
        const border = getBorders(boxStyle);
        const c = activeTheme;

        const serverConfig = server?.config?.server ?? {
          host: 'localhost',
          port: 5173,
          https: false,
        };
        const { host = 'localhost', port = 5173 } = serverConfig;
        const protocol = serverConfig.https ? 'https' : 'http';
        const localUrl = `${protocol}://${host}:${port}/`;

        const pkg = getPackageJson();
        const gitInfo = showGit ? getGitInfo() : null;
        const codebase =
          showProjectStats || showMediaStats
            ? getCodebaseStats(
                getWorkspaceRoot(),
                includeExtensions,
                excludeDirs
              )
            : null;
        const arch = getArchitectureStats(getWorkspaceRoot());
        const nodeModules = showStorage ? getNodeModulesInfo() : null;
        const networkAddresses = getNetworkInterfaces();
        const securityAudit = showSecurityAudit ? getSecurityAudit() : null;
        const envInfo = detectEnvironment();
        const runtime = getRuntimeProcess();

        if (clearScreen) {
          console.clear();
        }

        console.log();

        if (bannerStyle === BannerStyles.MINIMAL) {
          const minimalRows = [
            `${c.secondary.bold('➜ Local:   ')} ${c.primary.bold.underline(formatTerminalLink(localUrl, localUrl))}`,
            `${c.secondary.bold('➜ Status:  ')} ${c.success('● Active')} ${c.muted(`(Port ${port})`)}  ${c.muted('•')}  ${c.highlight(projectName)}`,
          ];
          printBoxedCard(
            'VITE DEV SERVER',
            '⚡',
            minimalRows,
            width,
            border,
            c
          );
          if (onServerStart) onServerStart(server);
          return;
        }

        // 1. Hero Art / Header
        if (customBanner) {
          console.log(customBanner);
        } else if (showAsciiArt) {
          const asciiLines = renderAsciiHero(artStyle);
          asciiLines.forEach((line) => console.log(line));
          console.log();
        }

        // 2. Main Title Banner Box
        const mainBorder = getBorders('double');
        const headerTitle = `  🚀  ${c.subTagBg(' DEV SERVER ACTIVE ')}  ${c.muted('•')}  ${c.highlight(projectName)}  `;
        console.log(
          c.primary.bold(
            mainBorder.tl + mainBorder.h.repeat(width - 2) + mainBorder.tr
          )
        );
        console.log(createLine('', width, mainBorder));
        console.log(createLine(headerTitle, width, mainBorder, c.primary));
        console.log(createLine('', width, mainBorder));
        console.log(
          c.primary.bold(
            mainBorder.bl + mainBorder.h.repeat(width - 2) + mainBorder.br
          )
        );
        console.log();

        // 3. Network & Server Access Card
        const networkRows = [
          `${c.secondary.bold('➜ Local:    ')} ${c.primary.bold.underline(formatTerminalLink(localUrl, localUrl))}`,
        ];

        networkAddresses.forEach((addr) => {
          const netUrl = `${protocol}://${addr.address}:${port}/`;
          networkRows.push(
            `${c.secondary.bold('➜ Network:  ')} ${c.primary.underline(formatTerminalLink(netUrl, netUrl))} ${c.muted(`(${addr.name})`)}`
          );
        });

        if (showPortInfo) {
          networkRows.push(
            `${c.secondary.bold('➜ Port:     ')} ${chalk.white(port)} ${c.success('● Active & Bound')} ${c.muted(`[${protocol.toUpperCase()}]`)}`
          );
        }

        printBoxedCard(
          'SERVER NETWORK & ACCESS',
          '🌐',
          networkRows,
          width,
          border,
          c
        );

        // 4. Git Intelligence Card
        if (showGit && gitInfo) {
          const gitRows = [
            `${c.accent.bold('Branch:   ')} ${c.highlight(gitInfo.branch)} ${
              gitInfo.isDirty
                ? c.warning(
                    `(● ${gitInfo.modifiedCount} modified, ${gitInfo.untrackedCount} untracked)`
                  )
                : c.success('(✓ clean working tree)')
            }`,
            `${c.accent.bold('Commit:   ')} ${c.primary(gitInfo.commit)} ${c.muted('–')} ${chalk.white(gitInfo.message.substring(0, Math.max(20, width - 30)))}`,
            `${c.accent.bold('Author:   ')} ${chalk.white(gitInfo.author)} ${c.muted(gitInfo.date ? `(${gitInfo.date})` : '')}`,
          ];

          if (gitInfo.remote && gitInfo.remote !== 'N/A') {
            gitRows.push(
              `${c.accent.bold('Remote:   ')} ${c.muted(gitInfo.remote)}`
            );
          }

          if (gitInfo.totalCommits && gitInfo.totalCommits !== 'N/A') {
            gitRows.push(
              `${c.accent.bold('Stats:    ')} ${chalk.white(gitInfo.totalCommits)} total commits${gitInfo.tag ? ` • Tag: ${c.success(gitInfo.tag)}` : ''}`
            );
          }

          printBoxedCard(
            'GIT REPOSITORY TELEMETRY',
            '🔀',
            gitRows,
            width,
            border,
            c
          );
        }

        // 5. Codebase & Portfolio Media Statistics
        if (codebase && (showProjectStats || showMediaStats)) {
          const codeRows = [];

          if (showProjectStats) {
            codeRows.push(
              `${c.success.bold('Source Code: ')} ${chalk.white(codebase.totalFiles.toLocaleString())} files ${c.muted('|')} ${chalk.white(codebase.totalLines.toLocaleString())} lines of code`
            );

            // Extensions breakdown pill line
            const extPills = Object.entries(codebase.counts)
              .filter(([_, count]) => count > 0)
              .map(([ext, count]) => `${c.primary(ext)}: ${chalk.white(count)}`)
              .join(c.muted(' • '));
            if (extPills) {
              codeRows.push(`${c.success.bold('File Types:  ')} ${extPills}`);
            }

            codeRows.push(
              `${c.success.bold('Architecture:')} ${chalk.white(arch.components)} components ${c.muted('•')} ${chalk.white(arch.pages)} pages ${c.muted('•')} ${chalk.white(arch.hooks)} hooks`
            );
          }

          if (showMediaStats && codebase.mediaStats) {
            const m = codebase.mediaStats;
            codeRows.push(
              `${c.accent.bold('Audio Tracks:')} ${chalk.white(m.audio.count)} audio files ${c.muted(`(${formatBytes(m.audio.size)})`)}`
            );
            codeRows.push(
              `${c.accent.bold('3D Assets:   ')} ${chalk.white(m.models3d.count)} models/textures ${c.muted(`(${formatBytes(m.models3d.size)})`)}`
            );
            codeRows.push(
              `${c.accent.bold('Images:      ')} ${chalk.white(m.images.count)} visual assets ${c.muted(`(${formatBytes(m.images.size)})`)}`
            );
          }

          if (showStorage && nodeModules) {
            codeRows.push(
              `${c.warning.bold('Workspace:   ')} ${formatBytes(codebase.totalBytes)} code ${c.muted('|')} node_modules: ${nodeModules.size} (${nodeModules.packages} pkgs)`
            );
          }

          printBoxedCard(
            'PROJECT & MEDIA ASSET STATS',
            '📊',
            codeRows,
            width,
            border,
            c
          );
        }

        // 6. Dependencies Card
        if (showDependencies && pkg) {
          const deps = Object.entries(pkg.dependencies || {});
          const devDeps = Object.entries(pkg.devDependencies || {});
          const depRows = [
            `${c.success.bold('Runtime:     ')} ${c.highlight(`${deps.length} packages`)} ${c.muted('|')} ${c.secondary.bold('Dev:')} ${c.highlight(`${devDeps.length} packages`)}`,
          ];

          if (deps.length > 0) {
            const topDeps = deps
              .slice(0, 4)
              .map(([name, ver]) => `${c.primary(name)} ${c.muted(ver)}`)
              .join('  ');
            depRows.push(`${c.muted('Top Runtime: ')} ${topDeps}`);
          }

          if (devDeps.length > 0 && bannerStyle !== BannerStyles.COMPACT) {
            const topDevs = devDeps
              .slice(0, 4)
              .map(([name, ver]) => `${c.secondary(name)} ${c.muted(ver)}`)
              .join('  ');
            depRows.push(`${c.muted('Top Dev:     ')} ${topDevs}`);
          }

          printBoxedCard(
            'PACKAGE DEPENDENCIES',
            '📚',
            depRows,
            width,
            border,
            c
          );
        }

        // 6. Environment & Hardware Telemetry
        if (showEnvironment || showSystemInfo) {
          const sysRows = [];

          if (showEnvironment) {
            const nodeVer = runtime?.version || 'N/A';
            const viteVer = server?.config?.viteVersion || '6.x';
            sysRows.push(
              `${c.warning.bold('Runtime:    ')} Node ${c.highlight(nodeVer)} ${c.muted('•')} Vite v${c.highlight(viteVer)} ${c.muted('•')} PM: ${c.highlight(envInfo.packageManager)}`
            );
            sysRows.push(
              `${c.warning.bold('Context:    ')} Mode: ${c.highlight((server?.config?.mode || 'development').toUpperCase())} ${c.muted('•')} Terminal: ${c.highlight(envInfo.terminal)}`
            );
          }

          if (showSystemInfo) {
            const totalMem = os.totalmem();
            const freeMem = os.freemem();
            const usedMem = totalMem - freeMem;
            const memRatio = usedMem / totalMem;
            const cpus = os.cpus();
            const cpuModel = cpus?.[0]?.model
              ? cpus[0].model.replace(/\s+/g, ' ').trim()
              : 'Unknown CPU';

            sysRows.push(
              `${c.warning.bold('Platform:   ')} ${os.platform()} (${os.arch()}) ${c.muted('•')} Host: ${chalk.white(os.hostname())}`
            );
            sysRows.push(
              `${c.warning.bold('CPU:        ')} ${chalk.white(cpuModel.substring(0, Math.max(25, width - 28)))} ${c.muted(`(${cpus.length} cores)`)}`
            );
            sysRows.push(
              `${c.warning.bold('Sys Memory: ')} ${renderProgressBar(memRatio, 10)} ${c.muted(`(${formatBytes(usedMem)} / ${formatBytes(totalMem)})`)}`
            );
          }

          if (showPerformance && runtime?.memoryUsage) {
            const mem = runtime.memoryUsage();
            sysRows.push(
              `${c.primary.bold('V8 Heap:    ')} ${formatBytes(mem.heapUsed)} used ${c.muted('/')} ${formatBytes(mem.heapTotal)} allocated ${c.muted(`(RSS: ${formatBytes(mem.rss)})`)}`
            );
          }

          if (showTimestamp) {
            sysRows.push(
              `${c.muted('Session:    ')} Server started at ${new Date().toLocaleTimeString()} ${c.muted(`(Uptime: ${performanceMonitor.getUptime()})`)}`
            );
          }

          printBoxedCard(
            'ENVIRONMENT & SYSTEM TELEMETRY',
            '⚡',
            sysRows,
            width,
            border,
            c
          );
        }

        // 7. Environment Variables
        if (showEnvironmentVariables) {
          const envVars = getEnvironmentVars();
          const entries = Object.entries(envVars);
          if (entries.length > 0) {
            const envRows = entries.map(([k, v]) => {
              const displayVal = v.length > 40 ? `${v.substring(0, 40)}...` : v;
              return `${c.secondary.bold(k)}: ${chalk.gray(displayVal)}`;
            });
            printBoxedCard(
              'ENVIRONMENT VARIABLES',
              '🔐',
              envRows,
              width,
              border,
              c
            );
          }
        }

        // 8. Security Audit
        if (showSecurityAudit && securityAudit && securityAudit.total > 0) {
          const secRows = [
            `${c.error.bold('Vulnerabilities: ')} ${chalk.red.bold(securityAudit.total)} detected`,
            `  ${chalk.red.bold('Critical:')} ${securityAudit.critical}   ${chalk.red('High:')} ${securityAudit.high}   ${chalk.yellow('Moderate:')} ${securityAudit.moderate}   ${chalk.blue('Low:')} ${securityAudit.low}`,
            c.muted('  Run "npm audit" or "npm audit fix" to remediate'),
          ];
          printBoxedCard(
            'SECURITY HEALTH AUDIT',
            '🛡️',
            secRows,
            width,
            border,
            c
          );
        }

        // 9. Custom Messages & Announcements
        if (customMessages.length > 0) {
          const msgRows = customMessages.map(
            (msg) => `${c.accent('➜')} ${chalk.white(msg)}`
          );
          printBoxedCard(
            'PROJECT ANNOUNCEMENTS',
            '💬',
            msgRows,
            width,
            border,
            c
          );
        }

        // 10. Interactive Shortcuts Footer
        const shortcuts = [
          `${c.highlight('r')} ${c.muted('restart')}`,
          `${c.highlight('u')} ${c.muted('url')}`,
          `${c.highlight('o')} ${c.muted('open')}`,
          `${c.highlight('c')} ${c.muted('clear')}`,
          `${c.highlight('q')} ${c.muted('quit')}`,
          `${c.highlight('h')} ${c.muted('help')}`,
        ].join('  ');

        console.log(`  ${c.muted('Shortcuts:')} ${shortcuts}`);
        console.log();

        // 11. Ready Status Badge
        const readyText = `  ${c.success.bold('✓ READY')} ${c.muted('Listening for file changes & reactive module updates...')}`;
        console.log(readyText);
        console.log();

        if (onServerStart) onServerStart(server);
        logMsg('info', 'Vite dev server banner rendered successfully');
      }, 0);

      // Track live file updates & HMR events
      server.watcher.on('change', (filePath) => {
        const delta = performanceMonitor.recordHotReload(filePath);
        if (showHotReloadStats) {
          const fileName = path.basename(filePath);
          const ext = path.extname(filePath);
          const speedBadge =
            delta < 100
              ? chalk.bgGreen.black.bold(' BLAZING ')
              : chalk.bgBlue.black.bold(' FAST ');

          console.log(
            `  ${activeTheme.primary('🔥 HMR')} ${speedBadge} ${chalk.white.bold(fileName)} ${chalk.gray(`(${ext})`)} ${chalk.gray(`+${delta}ms`)} ${chalk.gray(`[#${performanceMonitor.hotReloadCount}]`)}`
          );
        }
      });
    },

    buildStart() {
      performanceMonitor.startBuild();
      const c = activeTheme;
      console.log();
      console.log(c.tagBg(' ⚙️  PRODUCTION BUILD '));
      console.log(
        c.warning(
          '  🔨 Compiling assets and bundling modules for deployment...'
        )
      );
      console.log(
        c.muted(`  📊 Build session #${performanceMonitor.buildCount}`)
      );
      console.log();

      if (onBuildStart) onBuildStart();
      logMsg('info', 'Production build started');
    },

    buildEnd() {
      const buildDuration = performanceMonitor.endBuild();
      const c = activeTheme;
      console.log();
      console.log(c.tagBg(' ✓ BUILD COMPLETED '));
      console.log(
        c.success(
          `  ✓ Bundling completed successfully in ${c.highlight(`${buildDuration}ms`)}`
        )
      );

      if (showBuildAnalytics) {
        console.log(
          c.muted(
            `  📊 Total builds executed in session: ${performanceMonitor.buildCount}`
          )
        );
      }
      console.log();

      if (onBuildEnd) onBuildEnd();
      logMsg('info', `Production build completed in ${buildDuration}ms`);
    },

    closeBundle() {
      const c = activeTheme;
      console.log();
      console.log(c.tagBg(' 🛑 DEV SERVER STOPPED '));
      console.log(c.muted('  Session Statistics:'));
      console.log(
        `     Uptime:       ${c.highlight(performanceMonitor.getUptime())}`
      );
      console.log(
        `     HMR Updates:  ${c.highlight(performanceMonitor.hotReloadCount)}`
      );
      console.log(
        `     Builds:       ${c.highlight(performanceMonitor.buildCount)}`
      );

      if (showHmrHotspots) {
        const hotspots = performanceMonitor.getTopHotspots(3);
        if (hotspots.length > 0) {
          console.log(c.muted('     HMR Hotspots:'));
          hotspots.forEach(([file, count]) => {
            console.log(
              `       ${c.primary(path.basename(file))}: ${chalk.white(count)} edits`
            );
          });
        }
      }

      console.log(c.muted('  Thanks for developing with Vite! 👋'));
      console.log();

      cacheManager.clear();
      logMsg('info', 'Dev server stopped');
    },

    handleHotUpdate({ file, timestamp }) {
      logMsg('debug', `Hot update triggered: ${file} at ${timestamp}`);
    },

    configResolved(config) {
      logMsg('info', `Vite config resolved for mode: ${config.mode}`);
    },

    transformIndexHtml(html) {
      if (showPerformance) {
        const perfScript = `
          <script>
            window.addEventListener('load', () => {
              if (typeof performance === 'undefined') return;
              const nav = performance.getEntriesByType('navigation')[0];
              if (!nav) return;
              console.log(
                '%c⚡ Vite Dev Server%c Loaded in ' + Math.round(nav.loadEventEnd - nav.startTime) + 'ms (DOM: ' + Math.round(nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart) + 'ms)',
                'background: #00dc82; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 3px;',
                'color: #00dc82; font-weight: bold; margin-left: 6px;'
              );
            });
          </script>
        `;
        return html.replace('</body>', `${perfScript}</body>`);
      }
      return html;
    },
  };
}

export default terminalBannerPlugin;
