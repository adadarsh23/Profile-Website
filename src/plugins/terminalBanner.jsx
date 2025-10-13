import chalk from 'chalk';
import os from 'os';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function terminalBannerPlugin(options = {}) {
  const {
    projectName = 'React + Vite Setup',
    showTimestamp = true,
    showEnvironment = true,
    showSystemInfo = true,
    showProjectStats = true,
    showDependencies = true,
    showStorage = true,
    customMessages = [],
  } = options;

  // Helper functions
  const getGitBranch = () => {
    try {
      return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    } catch {
      return 'N/A';
    }
  };

  const getGitCommit = () => {
    try {
      return execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    } catch {
      return 'N/A';
    }
  };

  const getProjectSize = (dir) => {
    try {
      let totalSize = 0;
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        if (file === 'node_modules' || file === '.git' || file === 'dist') return;
        
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          totalSize += getProjectSize(filePath);
        } else {
          totalSize += stats.size;
        }
      });
      
      return totalSize;
    } catch {
      return 0;
    }
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getNodeModulesSize = () => {
    try {
      const nodeModulesPath = path.join(process.cwd(), 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) return 0;
      
      const size = execSync(`du -sh node_modules 2>/dev/null || echo "0"`, { encoding: 'utf8' });
      return size.trim().split('\t')[0] || '0';
    } catch {
      return 'N/A';
    }
  };

  const countFiles = (dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue']) => {
    try {
      let count = 0;
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        if (file === 'node_modules' || file === '.git' || file === 'dist') return;
        
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          count += countFiles(filePath, extensions);
        } else if (extensions.some(ext => file.endsWith(ext))) {
          count++;
        }
      });
      
      return count;
    } catch {
      return 0;
    }
  };

  const getPackageJson = () => {
    try {
      const pkgPath = path.join(process.cwd(), 'package.json');
      return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    } catch {
      return null;
    }
  };

  return {
    name: 'terminal-banner',
    
    configureServer(server) {
      const { host = 'localhost', port = 5173 } = server.config.server;
      const protocol = server.config.server.https ? 'https' : 'http';
      const url = `${protocol}://${host}:${port}/`;
      
      // Get network IP
      const networkInterfaces = os.networkInterfaces();
      let networkIP = 'N/A';
      Object.keys(networkInterfaces).forEach(key => {
        networkInterfaces[key]?.forEach(details => {
          if (details.family === 'IPv4' && !details.internal) {
            networkIP = details.address;
          }
        });
      });
      const networkUrl = networkIP !== 'N/A' ? `${protocol}://${networkIP}:${port}/` : 'N/A';

      // Get project data
      const pkg = getPackageJson();
      const projectSize = getProjectSize(process.cwd());
      const nodeModulesSize = getNodeModulesSize();
      const componentCount = countFiles(path.join(process.cwd(), 'src'));
      const gitBranch = getGitBranch();
      const gitCommit = getGitCommit();

      // Clear console
      console.clear();

      // Main Banner
      const bannerWidth = 60;
      const topBorder = '╔' + '═'.repeat(bannerWidth) + '╗';
      const bottomBorder = '╚' + '═'.repeat(bannerWidth) + '╝';
      const sideBorder = '║';

      const createLine = (text, color = chalk.white) => {
        const stripped = text.replace(/\u001b\[.*?m/g, '');
        const padding = bannerWidth - stripped.length;
        return sideBorder + color(text) + ' '.repeat(Math.max(0, padding)) + sideBorder;
      };

      console.log(chalk.cyan.bold(topBorder));
      console.log(createLine(''));
      console.log(createLine('    🚀 ' + chalk.bgBlue.white.bold(' VITE DEV SERVER READY ') + ' 🚀', chalk.cyan));
      console.log(createLine(''));
      console.log(chalk.cyan.bold(bottomBorder));
      console.log();

      // Project Information Section
      console.log(chalk.bgCyan.black.bold(' 📦 PROJECT INFORMATION '));
      console.log();
      console.log(chalk.green.bold('  📂 Project:    '), chalk.white(projectName));
      console.log(chalk.green.bold('  📌 Version:    '), chalk.white(pkg?.version || 'N/A'));
      console.log(chalk.green.bold('  👤 Author:     '), chalk.white(pkg?.author || 'N/A'));
      console.log(chalk.green.bold('  📝 Description:'), chalk.white(pkg?.description || 'No description'));
      console.log();

      // Server URLs Section
      console.log(chalk.bgBlue.black.bold(' 🌐 SERVER URLS '));
      console.log();
      console.log(chalk.blue.bold('  🏠 Local:   '), chalk.cyan.underline(url));
      console.log(chalk.blue.bold('  🔗 Network: '), networkUrl !== 'N/A' ? chalk.cyan.underline(networkUrl) : chalk.gray(networkUrl));
      console.log();

      // Environment & System Info
      if (showEnvironment || showSystemInfo) {
        console.log(chalk.bgYellow.black.bold(' ⚙️  ENVIRONMENT & SYSTEM '));
        console.log();
        
        if (showEnvironment) {
          const mode = server.config.mode;
          console.log(chalk.yellow.bold('  ⚡ Mode:       '), chalk.white(mode.toUpperCase()));
          console.log(chalk.yellow.bold('  🔧 Node:       '), chalk.white(process.version));
        }
        
        if (showSystemInfo) {
          console.log(chalk.yellow.bold('  💻 Platform:   '), chalk.white(`${os.platform()} (${os.arch()})`));
          console.log(chalk.yellow.bold('  🧠 Memory:     '), chalk.white(`${Math.round(os.freemem() / 1024 / 1024)} MB free / ${Math.round(os.totalmem() / 1024 / 1024)} MB total`));
          console.log(chalk.yellow.bold('  🖥️  CPU:        '), chalk.white(`${os.cpus()[0].model.substring(0, 40)}...`));
        }
        
        if (showTimestamp) {
          const time = new Date().toLocaleString();
          console.log(chalk.magenta.bold('  🕒 Started:    '), chalk.white(time));
        }
        console.log();
      }

      // Git Information
      if (gitBranch !== 'N/A') {
        console.log(chalk.bgMagenta.black.bold(' 🔀 GIT REPOSITORY '));
        console.log();
        console.log(chalk.magenta.bold('  🌿 Branch:     '), chalk.white(gitBranch));
        console.log(chalk.magenta.bold('  📍 Commit:     '), chalk.white(gitCommit));
        console.log();
      }

      // Storage & Project Stats
      if (showStorage || showProjectStats) {
        console.log(chalk.bgGreen.black.bold(' 💾 STORAGE & STATISTICS '));
        console.log();
        
        if (showStorage) {
          console.log(chalk.green.bold('  📊 Project Size:      '), chalk.white(formatBytes(projectSize)));
          console.log(chalk.green.bold('  📦 node_modules:      '), chalk.white(nodeModulesSize));
          console.log(chalk.green.bold('  💿 Disk Free:         '), chalk.white(formatBytes(fs.statSync('/').free || 0)));
        }
        
        if (showProjectStats) {
          console.log(chalk.green.bold('  📄 Component Files:   '), chalk.white(componentCount));
          console.log(chalk.green.bold('  🏗️  Build Tool:        '), chalk.white('Vite ' + server.config.viteVersion || 'N/A'));
        }
        console.log();
      }

      // Dependencies
      if (showDependencies && pkg) {
        const deps = Object.keys(pkg.dependencies || {});
        const devDeps = Object.keys(pkg.devDependencies || {});
        
        console.log(chalk.bgWhite.black.bold(' 📚 DEPENDENCIES '));
        console.log();
        console.log(chalk.white.bold('  📦 Dependencies:     '), chalk.cyan(deps.length));
        if (deps.length > 0) {
          console.log(chalk.gray('     ' + deps.slice(0, 5).join(', ') + (deps.length > 5 ? '...' : '')));
        }
        console.log();
        console.log(chalk.white.bold('  🔧 Dev Dependencies: '), chalk.cyan(devDeps.length));
        if (devDeps.length > 0) {
          console.log(chalk.gray('     ' + devDeps.slice(0, 5).join(', ') + (devDeps.length > 5 ? '...' : '')));
        }
        console.log();
      }

      // Custom Messages
      if (customMessages.length > 0) {
        console.log(chalk.bgCyan.black.bold(' 💬 CUSTOM MESSAGES '));
        console.log();
        customMessages.forEach(msg => console.log(chalk.cyan('  ➜'), chalk.white(msg)));
        console.log();
      }

      // Keyboard Shortcuts
      console.log(chalk.bgGray.white.bold(' 💡 KEYBOARD SHORTCUTS '));
      console.log();
      console.log(chalk.gray('  Press'), chalk.white.bold('r'), chalk.gray('+ Enter to'), chalk.white('restart server'));
      console.log(chalk.gray('  Press'), chalk.white.bold('u'), chalk.gray('+ Enter to'), chalk.white('show server URL'));
      console.log(chalk.gray('  Press'), chalk.white.bold('o'), chalk.gray('+ Enter to'), chalk.white('open in browser'));
      console.log(chalk.gray('  Press'), chalk.white.bold('c'), chalk.gray('+ Enter to'), chalk.white('clear console'));
      console.log(chalk.gray('  Press'), chalk.white.bold('q'), chalk.gray('+ Enter to'), chalk.white('quit server'));
      console.log();

      // Ready Status
      const readyBox = '┌' + '─'.repeat(58) + '┐';
      const readyEnd = '└' + '─'.repeat(58) + '┘';
      console.log(chalk.green(readyBox));
      console.log(chalk.green('│') + chalk.green.bold('  ✓ Server is ready and watching for changes...') + ' '.repeat(10) + chalk.green('│'));
      console.log(chalk.green(readyEnd));
      console.log();
    },

    buildStart() {
      console.log();
      console.log(chalk.bgYellow.black.bold(' ⚙️  BUILD STARTED '));
      console.log();
      console.log(chalk.yellow('  🔨 Building for production...'));
      console.log(chalk.gray('  ⏳ This may take a moment...'));
      console.log();
    },

    buildEnd() {
      const buildTime = new Date().toLocaleTimeString();
      console.log();
      console.log(chalk.bgGreen.black.bold(' ✓ BUILD COMPLETED '));
      console.log();
      console.log(chalk.green('  ✓ Build completed successfully!'));
      console.log(chalk.gray('  🕒 Completed at:'), chalk.white(buildTime));
      console.log();
    },

    closeBundle() {
      console.log(chalk.bgRed.white.bold(' 🛑 SERVER STOPPED '));
      console.log();
      console.log(chalk.red('  Vite dev server has been terminated.'));
      console.log(chalk.gray('  Thanks for using Vite! 👋'));
      console.log();
    }
  };
}

export default terminalBannerPlugin;