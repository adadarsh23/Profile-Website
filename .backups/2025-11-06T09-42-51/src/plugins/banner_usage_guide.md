# Enhanced Terminal Banner Plugin - Complete Guide

## 🚀 Installation

```bash
npm install chalk --save-dev
# or
yarn add chalk --dev
# or
pnpm add chalk --save-dev
```

## 📦 Basic Usage

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import terminalBannerPlugin from './plugins/terminalBannerPlugin';

export default defineConfig({
  plugins: [
    react(),
    terminalBannerPlugin({
      projectName: 'My Awesome Project',
    }),
  ],
});
```

## ⚙️ Configuration Options

### Complete Configuration Example

```javascript
import terminalBannerPlugin, {
  BannerThemes,
  BannerStyles,
} from './plugins/terminalBannerPlugin';

terminalBannerPlugin({
  // Basic Settings
  projectName: 'My Awesome Project',
  bannerStyle: BannerStyles.DETAILED, // 'minimal', 'compact', 'detailed'
  theme: BannerThemes.OCEAN, // 'default', 'ocean', 'sunset', 'monochrome', 'matrix'

  // Display Toggles
  showTimestamp: true,
  showEnvironment: true,
  showSystemInfo: true,
  showProjectStats: true,
  showDependencies: true,
  showStorage: true,
  showGit: true,
  showPerformance: true,
  showSecurityAudit: true,
  showBuildAnalytics: true,
  showEnvironmentVariables: false, // Set true to show VITE_ and NODE_ env vars
  showPortInfo: true,
  showHotReloadStats: true,
  showAsciiArt: true,

  // Visual Options
  enableColors: true,
  enableAnimations: true,

  // Logging Options
  enableLogging: true,
  logLevel: 'info', // 'error', 'warn', 'info', 'debug'

  // File Filtering
  excludeDirs: [
    'node_modules',
    '.git',
    'dist',
    'build',
    'coverage',
    '.next',
    '.nuxt',
  ],
  includeExtensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'],

  // Custom Messages
  customMessages: [
    '🎉 Welcome to the development server!',
    '📚 Check the docs at: https://vitejs.dev',
    '🐛 Report issues at: https://github.com/yourrepo/issues',
  ],

  // Custom ASCII Banner
  customBanner: `
    ╔═══════════════════════════╗
    ║   MY CUSTOM BANNER        ║
    ╚═══════════════════════════╝
  `,

  // Lifecycle Callbacks
  onServerStart: (server) => {
    console.log('🎯 Custom action on server start');
    // Add your custom logic here
  },
  onBuildStart: () => {
    console.log('🔨 Custom action on build start');
  },
  onBuildEnd: () => {
    console.log('✅ Custom action on build end');
  },
});
```

## 🎨 Available Themes

### 1. Default Theme

```javascript
theme: 'default'; // Cyan and blue colors
```

### 2. Ocean Theme

```javascript
theme: 'ocean'; // Blue and cyan variations
```

### 3. Sunset Theme

```javascript
theme: 'sunset'; // Magenta, red, and yellow
```

### 4. Monochrome Theme

```javascript
theme: 'monochrome'; // Black and white only
```

### 5. Matrix Theme

```javascript
theme: 'matrix'; // Green terminal style
```

## 📊 Banner Styles

### Minimal Style

```javascript
bannerStyle: 'minimal';
```

Shows only essential information:

- Project name
- Server URLs
- Basic commands

### Compact Style

```javascript
bannerStyle: 'compact';
```

Shows moderate information:

- Project info
- Server URLs
- Environment
- Git info (if available)

### Detailed Style (Default)

```javascript
bannerStyle: 'detailed';
```

Shows comprehensive information:

- All project details
- Full system information
- Dependencies
- Security audit
- Performance metrics
- Storage statistics

## 🔧 Common Use Cases

### 1. Minimal Setup (Fast Startup)

```javascript
terminalBannerPlugin({
  projectName: 'Quick Project',
  bannerStyle: 'minimal',
  showSystemInfo: false,
  showDependencies: false,
  showStorage: false,
  showSecurityAudit: false,
});
```

### 2. Development Mode (Full Information)

```javascript
terminalBannerPlugin({
  projectName: 'Dev Project',
  bannerStyle: 'detailed',
  showEnvironmentVariables: true,
  showHotReloadStats: true,
  enableLogging: true,
  logLevel: 'debug',
});
```

### 3. Production Build Monitoring

```javascript
terminalBannerPlugin({
  projectName: 'Production Build',
  showBuildAnalytics: true,
  showPerformance: true,
  showSecurityAudit: true,
  onBuildEnd: () => {
    // Send build metrics to monitoring service
    console.log('📊 Sending build metrics...');
  },
});
```

### 4. Team Collaboration Setup

```javascript
terminalBannerPlugin({
  projectName: 'Team Project',
  showGit: true,
  customMessages: [
    '👥 Remember to pull latest changes before starting',
    '📋 Check JIRA for assigned tasks',
    '💬 Join our Slack channel for updates',
  ],
  onServerStart: (server) => {
    // Check for updates, remind about standup, etc.
  },
});
```

### 5. Security-Focused Setup

```javascript
terminalBannerPlugin({
  projectName: 'Secure App',
  showSecurityAudit: true,
  showEnvironmentVariables: true,
  enableLogging: true,
  customMessages: [
    '🔒 Run "npm audit fix" if vulnerabilities detected',
    '🔐 Ensure .env file is in .gitignore',
  ],
});
```

## 📝 Features Overview

### ✅ What's Included

1. **Project Information**
   - Name, version, author, license
   - Description and keywords
   - Package.json metadata

2. **Server Details**
   - Local and network URLs
   - Multiple network interfaces
   - Port availability check

3. **System Information**
   - OS, platform, architecture
   - CPU cores and model
   - Memory usage (free/total)
   - System uptime
   - Node and NPM versions

4. **Git Integration**
   - Current branch and commit
   - Author and commit message
   - Remote URL
   - Dirty status (uncommitted changes)
   - Total commits count

5. **Storage & Statistics**
   - Project size (excluding node_modules)
   - node_modules size
   - File counts by extension
   - Total lines of code

6. **Dependencies**
   - Production dependencies
   - Development dependencies
   - Version numbers
   - Quick overview

7. **Security Audit**
   - Vulnerability counts (critical, high, moderate, low)
   - Total vulnerabilities
   - Suggestion to run npm audit

8. **Performance Monitoring**
   - Server startup time
   - Memory usage
   - Build time tracking
   - HMR update counter
   - Session uptime

9. **Build Analytics**
   - Build count
   - Build duration
   - Success/failure tracking

10. **Hot Module Replacement (HMR)**
    - Real-time update notifications
    - File change tracking
    - Update counter

11. **Environment Variables**
    - VITE\_ prefixed variables
    - NODE\_ prefixed variables
    - Configurable display

12. **Logging System**
    - File-based logging
    - Configurable log levels
    - Error tracking

## 🎯 Advanced Features

### Performance Injection

The plugin automatically injects performance monitoring scripts into your HTML:

```javascript
showPerformance: true;
```

This will log browser performance metrics to the console:

- DOM Content Loaded time
- Page Load time
- Total Load time

### Cache Management

The plugin includes intelligent caching to avoid expensive operations:

- Git information cached for 5 seconds
- Node modules info cached
- File statistics cached

### Error Handling

Robust error handling ensures the plugin never crashes your build:

- Safe command execution
- File read/write protection
- Graceful degradation

### Cross-Platform Support

Works seamlessly on:

- ✅ Windows
- ✅ macOS
- ✅ Linux

## 🐛 Troubleshooting

### Issue: Git information not showing

**Solution:** Ensure you're in a git repository and git is installed

```bash
git --version
```

### Issue: Security audit showing N/A

**Solution:** Run npm audit manually first

```bash
npm audit
```

### Issue: Colors not displaying correctly

**Solution:** Ensure your terminal supports ANSI colors, or disable colors

```javascript
enableColors: false;
```

### Issue: Slow startup

**Solution:** Use minimal style and disable heavy features

```javascript
bannerStyle: 'minimal',
showSecurityAudit: false,
showStorage: false,
```

## 📄 Log Files

The plugin creates a log file at:

```
.vite-banner.log
```

Add to `.gitignore`:

```
.vite-banner.log
```

## 🔌 Integration with Other Tools

### With TypeScript

```typescript
import terminalBannerPlugin from './plugins/terminalBannerPlugin';
import type { Plugin } from 'vite';

const banner: Plugin = terminalBannerPlugin({
  projectName: 'TypeScript Project',
});
```

### With Vue

```javascript
import vue from '@vitejs/plugin-vue';
import terminalBannerPlugin from './plugins/terminalBannerPlugin';

export default defineConfig({
  plugins: [
    vue(),
    terminalBannerPlugin({
      projectName: 'Vue Project',
      includeExtensions: ['.vue', '.js', '.ts'],
    }),
  ],
});
```

### With React

```javascript
import react from '@vitejs/plugin-react';
import terminalBannerPlugin from './plugins/terminalBannerPlugin';

export default defineConfig({
  plugins: [
    react(),
    terminalBannerPlugin({
      projectName: 'React Project',
      includeExtensions: ['.jsx', '.tsx', '.js', '.ts'],
    }),
  ],
});
```

### With Svelte

```javascript
import { svelte } from '@sveltejs/vite-plugin-svelte';
import terminalBannerPlugin from './plugins/terminalBannerPlugin';

export default defineConfig({
  plugins: [
    svelte(),
    terminalBannerPlugin({
      projectName: 'Svelte Project',
      includeExtensions: ['.svelte', '.js', '.ts'],
    }),
  ],
});
```

## 🎨 Customization Examples

### Custom Lifecycle Actions

```javascript
terminalBannerPlugin({
  onServerStart: (server) => {
    // Open browser automatically
    const { exec } = require('child_process');
    const url = `http://localhost:${server.config.server.port}`;
    exec(`open ${url}`); // macOS
    // exec(`start ${url}`); // Windows
    // exec(`xdg-open ${url}`); // Linux
  },
  onBuildEnd: () => {
    // Send notification
    const notifier = require('node-notifier');
    notifier.notify({
      title: 'Build Complete',
      message: 'Your production build is ready!',
    });
  },
});
```

### Dynamic Configuration

```javascript
const isDevelopment = process.env.NODE_ENV === 'development';

terminalBannerPlugin({
  showEnvironmentVariables: isDevelopment,
  showHotReloadStats: isDevelopment,
  showBuildAnalytics: !isDevelopment,
  enableLogging: !isDevelopment,
  bannerStyle: isDevelopment ? 'detailed' : 'compact',
});
```

## 📚 Best Practices

1. **Use appropriate banner styles** for your workflow
   - Development: `detailed`
   - CI/CD: `compact` or `minimal`
   - Production builds: `compact`

2. **Enable logging in CI/CD** for debugging

   ```javascript
   enableLogging: process.env.CI === 'true',
   logLevel: 'info',
   ```

3. **Disable expensive operations** for faster startup

   ```javascript
   showSecurityAudit: false, // Run separately in CI
   showStorage: false, // Not needed every time
   ```

4. **Use callbacks** for automation

   ```javascript
   onServerStart: notifyTeam,
   onBuildEnd: deployToStaging,
   ```

5. **Keep logs in gitignore**
   ```
   .vite-banner.log
   ```

## 🚀 Performance Tips

- Cache is automatically cleared on server stop
- Git commands are executed only once per session
- File counting uses efficient traversal
- Node modules size uses native commands
- All expensive operations are cached

## 📦 Export Options

```javascript
// Named exports
import { BannerThemes, BannerStyles } from './plugins/terminalBannerPlugin';

// Default export
import terminalBannerPlugin from './plugins/terminalBannerPlugin';
```

## 🎯 Summary

This enhanced terminal banner plugin provides:

- ✅ Comprehensive project information
- ✅ Real-time performance monitoring
- ✅ Security vulnerability tracking
- ✅ Git integration
- ✅ HMR statistics
- ✅ Multiple themes and styles
- ✅ Full customization
- ✅ Lifecycle hooks
- ✅ Robust error handling
- ✅ Cross-platform support
- ✅ Intelligent caching
- ✅ File-based logging

Perfect for teams and solo developers who want detailed insights into their development environment! 🎉
