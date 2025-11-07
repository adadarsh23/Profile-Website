// #!/usr/bin/env node

// // commands.cjs - Custom commands for React + Vite project

// const { execSync } = require('child_process');
// const fs = require('fs');
// const path = require('path');

// // Colors for console output
// const colors = {
//   reset: '\x1b[0m',
//   bright: '\x1b[1m',
//   green: '\x1b[32m',
//   yellow: '\x1b[33m',
//   blue: '\x1b[34m',
//   red: '\x1b[31m',
//   cyan: '\x1b[36m',
// };

// // Helper function to execute commands
// const runCommand = (command, description) => {
//   console.log(
//     `${colors.cyan}${colors.bright}➜${colors.reset} ${description}...`
//   );
//   try {
//     execSync(command, { stdio: 'inherit' });
//     console.log(`${colors.green}✓${colors.reset} ${description} completed!\n`);
//     return true;
//   } catch (error) {
//     console.error(`${colors.red}✗${colors.reset} ${description} failed!\n`);
//     return false;
//   }
// };

// // Get command from arguments
// const command = process.argv[2];
// const arg = process.argv[3];

// // Numeric shortcuts: allow calling this script with numbers for quick actions
// // Usage: node commands.cjs 1   => runs 'clean'
// //        node commands.cjs 2   => runs 'clean:cache'
// //        node commands.cjs 3   => runs 'update:check'
// const numericShortcuts = {
//   1: 'clean',
//   2: 'clean:cache',
//   3: 'update:check',
// };

// // If a numeric shortcut was provided, translate it to the real command
// const resolvedCommand = numericShortcuts[command] || command;

// switch (resolvedCommand) {
//   case 'clean':
//     console.log(
//       `${colors.blue}${colors.bright}Cleaning project...${colors.reset}\n`
//     );
//     runCommand(
//       'rimraf node_modules package-lock.json dist',
//       'Removing node_modules, package-lock.json, and dist'
//     );
//     runCommand('npm install', 'Installing dependencies');
//     break;

//   case 'clean:cache':
//     console.log(
//       `${colors.blue}${colors.bright}Cleaning cache...${colors.reset}\n`
//     );
//     runCommand('npm cache clean --force', 'Cleaning npm cache');
//     runCommand('rimraf node_modules/.vite', 'Removing Vite cache');
//     runCommand('npm install', 'Reinstalling dependencies');
//     break;

//   case 'update:check':
//     console.log(
//       `${colors.blue}${colors.bright}Checking for updates...${colors.reset}\n`
//     );
//     runCommand('ncu', 'Checking outdated packages');
//     break;

//   case 'update:all':
//     console.log(
//       `${colors.blue}${colors.bright}Updating all packages...${colors.reset}\n`
//     );
//     runCommand('ncu -u', 'Updating package.json');
//     runCommand('npm install', 'Installing updated packages');
//     break;

//   case 'update:interactive':
//     console.log(
//       `${colors.blue}${colors.bright}Interactive update...${colors.reset}\n`
//     );
//     runCommand('ncu -i', 'Choose packages to update');
//     break;

//   case 'update:minor':
//     console.log(
//       `${colors.blue}${colors.bright}Updating minor versions...${colors.reset}\n`
//     );
//     runCommand('ncu -u --target minor', 'Updating to latest minor versions');
//     runCommand('npm install', 'Installing updated packages');
//     break;

//   case 'update:patch':
//     console.log(
//       `${colors.blue}${colors.bright}Updating patch versions...${colors.reset}\n`
//     );
//     runCommand('ncu -u --target patch', 'Updating to latest patch versions');
//     runCommand('npm install', 'Installing updated packages');
//     break;

//   case 'analyze':
//     console.log(
//       `${colors.blue}${colors.bright}Analyzing bundle size...${colors.reset}\n`
//     );
//     runCommand('npm run build', 'Building project');
//     console.log(
//       `${colors.yellow}Check dist folder for bundle analysis${colors.reset}\n`
//     );
//     break;

//   case 'preview':
//     console.log(
//       `${colors.blue}${colors.bright}Building and previewing...${colors.reset}\n`
//     );
//     if (runCommand('npm run build', 'Building project')) {
//       runCommand('npm run preview', 'Starting preview server');
//     }
//     break;

//   case 'fresh':
//     console.log(
//       `${colors.blue}${colors.bright}Fresh install...${colors.reset}\n`
//     );
//     runCommand(
//       'rimraf node_modules package-lock.json dist .vite',
//       'Removing all build artifacts'
//     );
//     runCommand('npm cache clean --force', 'Cleaning cache');
//     runCommand('npm install', 'Fresh install');
//     break;

//   case 'audit:fix':
//     console.log(
//       `${colors.blue}${colors.bright}Fixing security vulnerabilities...${colors.reset}\n`
//     );
//     runCommand('npm audit fix', 'Fixing vulnerabilities');
//     break;

//   case 'audit:check':
//     console.log(
//       `${colors.blue}${colors.bright}Checking security vulnerabilities...${colors.reset}\n`
//     );
//     runCommand('npm audit', 'Auditing packages');
//     break;

//   case 'create:component':
//     if (!arg) {
//       console.log(
//         `${colors.red}Please provide component name: npm run create:component MyComponent${colors.reset}`
//       );
//       break;
//     }
//     console.log(
//       `${colors.blue}${colors.bright}Creating component: ${arg}${colors.reset}\n`
//     );

//     const componentDir = path.join(process.cwd(), 'src', 'components', arg);
//     const componentFile = path.join(componentDir, `${arg}.jsx`);
//     const styleFile = path.join(componentDir, `${arg}.module.css`);

//     const componentTemplate = `import styles from './${arg}.module.css';

// function ${arg}() {
//   return (
//     <div className={styles.container}>
//       <h2>${arg} Component</h2>
//       <p>This is the ${arg} component.</p>
//     </div>
//   );
// }

// export default ${arg};
// `;

//     const styleTemplate = `.container {
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
// }

// .container h2 {
//   margin: 0 0 10px 0;
//   color: #333;
// }

// .container p {
//   margin: 0;
//   color: #666;
// }
// `;

//     try {
//       if (!fs.existsSync(componentDir)) {
//         fs.mkdirSync(componentDir, { recursive: true });
//       }
//       fs.writeFileSync(componentFile, componentTemplate);
//       fs.writeFileSync(styleFile, styleTemplate);
//       console.log(
//         `${colors.green}✓${colors.reset} Component created at: ${componentDir}\n`
//       );
//     } catch (error) {
//       console.error(
//         `${colors.red}✗${colors.reset} Failed to create component: ${error.message}\n`
//       );
//     }
//     break;

//   case 'create:page':
//     if (!arg) {
//       console.log(
//         `${colors.red}Please provide page name: npm run create:page About${colors.reset}`
//       );
//       break;
//     }
//     console.log(
//       `${colors.blue}${colors.bright}Creating page: ${arg}${colors.reset}\n`
//     );

//     const pageDir = path.join(process.cwd(), 'src', 'pages');
//     const pageFile = path.join(pageDir, `${arg}.jsx`);

//     const pageTemplate = `function ${arg}() {
//   return (
//     <div className="page-container">
//       <h1>${arg} Page</h1>
//       <p>Welcome to the ${arg} page.</p>
//     </div>
//   );
// }

// export default ${arg};
// `;

//     try {
//       if (!fs.existsSync(pageDir)) {
//         fs.mkdirSync(pageDir, { recursive: true });
//       }
//       fs.writeFileSync(pageFile, pageTemplate);
//       console.log(
//         `${colors.green}✓${colors.reset} Page created at: ${pageFile}\n`
//       );
//     } catch (error) {
//       console.error(
//         `${colors.red}✗${colors.reset} Failed to create page: ${error.message}\n`
//       );
//     }
//     break;

//   case 'info':
//     console.log(
//       `${colors.blue}${colors.bright}Project Information${colors.reset}\n`
//     );

//     try {
//       const packageJsonPath = path.join(process.cwd(), 'package.json');
//       const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
//       const packageJson = JSON.parse(packageJsonContent);
//       console.log(`${colors.cyan}Name:${colors.reset} ${packageJson.name}`);
//       console.log(
//         `${colors.cyan}Version:${colors.reset} ${packageJson.version}`
//       );
//       console.log(
//         `${colors.cyan}Description:${colors.reset} ${packageJson.description || 'N/A'}\n`
//       );

//       console.log(`${colors.yellow}Dependencies:${colors.reset}`);
//       Object.entries(packageJson.dependencies || {}).forEach(
//         ([name, version]) => {
//           console.log(`  - ${name}: ${version}`);
//         }
//       );

//       console.log(`\n${colors.yellow}Dev Dependencies:${colors.reset}`);
//       Object.entries(packageJson.devDependencies || {}).forEach(
//         ([name, version]) => {
//           console.log(`  - ${name}: ${version}`);
//         }
//       );
//     } catch (error) {
//       console.error(`${colors.red}Could not read package.json${colors.reset}`);
//     }
//     break;

//   case 'help':
//   default:
//     console.log(`
// ${colors.blue}${colors.bright}Available Commands:${colors.reset}

// ${colors.green}Package Management:${colors.reset}
//   clean               - Remove node_modules, package-lock, and dist
//   clean:cache         - Clean npm and Vite cache
//   fresh               - Complete fresh install
//   update:check        - Check for package updates
//   update:all          - Update all packages to latest
//   update:interactive  - Interactive package update
//   update:minor        - Update to latest minor versions
//   update:patch        - Update to latest patch versions

// ${colors.green}Security:${colors.reset}
//   audit:check         - Check for security vulnerabilities
//   audit:fix           - Fix security vulnerabilities

// ${colors.green}Build & Preview:${colors.reset}
//   analyze             - Analyze bundle size
//   preview             - Build and preview production

// ${colors.green}Generators:${colors.reset}
//   create:component <name>  - Create new component
//   create:page <name>       - Create new page

// ${colors.green}Info:${colors.reset}
//   info                - Show project information
//   help                - Show this help message

// ${colors.yellow}Usage:${colors.reset}
//   node commands.cjs <command> [args]
//   or via package.json: npm run cmd <command> [args]
//     `);
//     break;
// }

// #!/usr/bin / env node

// commands.cjs - Enhanced custom commands for React + Vite project

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

// Helper function to execute commands with better error handling
const runCommand = (command, description, options = {}) => {
  console.log(
    `${colors.cyan}${colors.bright}➜${colors.reset} ${description}...`
  );
  try {
    const result = execSync(command, {
      stdio: options.silent ? 'pipe' : 'inherit',
      encoding: 'utf8',
    });
    console.log(`${colors.green}✓${colors.reset} ${description} completed!\n`);
    return { success: true, output: result };
  } catch (error) {
    console.error(`${colors.red}✗${colors.reset} ${description} failed!`);
    if (error.stderr) {
      console.error(`${colors.dim}${error.stderr}${colors.reset}`);
    }
    console.log('');
    return { success: false, error };
  }
};

// Helper to check if a command exists
const commandExists = (cmd) => {
  try {
    execSync(`${process.platform === 'win32' ? 'where' : 'which'} ${cmd}`, {
      stdio: 'pipe',
    });
    return true;
  } catch {
    return false;
  }
};

// Helper to validate component/page names
const isValidName = (name) => {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
};

// Get command from arguments
const command = process.argv[2];
const arg = process.argv[3];

// Numeric shortcuts with expanded options
const numericShortcuts = {
  1: 'clean',
  2: 'clean:cache',
  3: 'update:check',
  4: 'fresh',
  5: 'audit:check',
  6: 'dev',
  7: 'build',
  8: 'preview',
};

// Resolve command
const resolvedCommand = numericShortcuts[command] || command;

// Command implementations
switch (resolvedCommand) {
  case 'clean':
    console.log(
      `${colors.blue}${colors.bright}🧹 Cleaning project...${colors.reset}\n`
    );
    runCommand(
      'rimraf node_modules package-lock.json dist',
      'Removing node_modules, package-lock.json, and dist'
    );
    runCommand('npm install', 'Installing dependencies');
    break;

  case 'clean:cache':
    console.log(
      `${colors.blue}${colors.bright}🗑️  Cleaning cache...${colors.reset}\n`
    );
    runCommand('npm cache clean --force', 'Cleaning npm cache');
    runCommand('rimraf node_modules/.vite', 'Removing Vite cache');
    runCommand('npm install', 'Reinstalling dependencies');
    break;

  case 'update:check':
    console.log(
      `${colors.blue}${colors.bright}🔍 Checking for updates...${colors.reset}\n`
    );
    if (!commandExists('ncu')) {
      console.log(
        `${colors.yellow}⚠️  npm-check-updates not installed. Installing...${colors.reset}\n`
      );
      runCommand('npm install -g npm-check-updates', 'Installing ncu');
    }
    runCommand('ncu', 'Checking outdated packages');
    break;

  case 'update:all':
    console.log(
      `${colors.blue}${colors.bright}📦 Updating all packages...${colors.reset}\n`
    );
    if (!commandExists('ncu')) {
      console.log(
        `${colors.red}✗ npm-check-updates not installed. Run: npm install -g npm-check-updates${colors.reset}\n`
      );
      break;
    }
    runCommand('ncu -u', 'Updating package.json');
    runCommand('npm install', 'Installing updated packages');
    break;

  case 'update:interactive':
    console.log(
      `${colors.blue}${colors.bright}🎯 Interactive update...${colors.reset}\n`
    );
    if (!commandExists('ncu')) {
      console.log(
        `${colors.red}✗ npm-check-updates not installed. Run: npm install -g npm-check-updates${colors.reset}\n`
      );
      break;
    }
    runCommand('ncu -i', 'Choose packages to update');
    break;

  case 'update:minor':
    console.log(
      `${colors.blue}${colors.bright}📦 Updating minor versions...${colors.reset}\n`
    );
    if (!commandExists('ncu')) {
      console.log(
        `${colors.red}✗ npm-check-updates not installed. Run: npm install -g npm-check-updates${colors.reset}\n`
      );
      break;
    }
    runCommand('ncu -u --target minor', 'Updating to latest minor versions');
    runCommand('npm install', 'Installing updated packages');
    break;

  case 'update:patch':
    console.log(
      `${colors.blue}${colors.bright}🔧 Updating patch versions...${colors.reset}\n`
    );
    if (!commandExists('ncu')) {
      console.log(
        `${colors.red}✗ npm-check-updates not installed. Run: npm install -g npm-check-updates${colors.reset}\n`
      );
      break;
    }
    runCommand('ncu -u --target patch', 'Updating to latest patch versions');
    runCommand('npm install', 'Installing updated packages');
    break;

  case 'analyze':
    console.log(
      `${colors.blue}${colors.bright}📊 Analyzing bundle size...${colors.reset}\n`
    );
    const buildResult = runCommand('npm run build', 'Building project');
    if (buildResult.success) {
      console.log(
        `${colors.yellow}💡 Tip: Check dist folder for bundle analysis${colors.reset}\n`
      );
    }
    break;

  case 'preview':
    console.log(
      `${colors.blue}${colors.bright}🚀 Building and previewing...${colors.reset}\n`
    );
    if (runCommand('npm run build', 'Building project').success) {
      runCommand('npm run preview', 'Starting preview server');
    }
    break;

  case 'fresh':
    console.log(
      `${colors.blue}${colors.bright}✨ Fresh install...${colors.reset}\n`
    );
    runCommand(
      'rimraf node_modules package-lock.json dist node_modules/.vite',
      'Removing all build artifacts'
    );
    runCommand('npm cache clean --force', 'Cleaning cache');
    runCommand('npm install', 'Fresh install');
    break;

  case 'audit:fix':
    console.log(
      `${colors.blue}${colors.bright}🔒 Fixing security vulnerabilities...${colors.reset}\n`
    );
    runCommand('npm audit fix', 'Fixing vulnerabilities');
    console.log(
      `${colors.yellow}💡 Tip: Use 'npm audit fix --force' for breaking changes${colors.reset}\n`
    );
    break;

  case 'audit:check':
    console.log(
      `${colors.blue}${colors.bright}🔍 Checking security vulnerabilities...${colors.reset}\n`
    );
    runCommand('npm audit', 'Auditing packages');
    break;

  case 'create:component':
    if (!arg) {
      console.log(
        `${colors.red}✗ Please provide component name: npm run create:component MyComponent${colors.reset}\n`
      );
      break;
    }

    if (!isValidName(arg)) {
      console.log(
        `${colors.red}✗ Component name must start with uppercase and contain only letters/numbers${colors.reset}\n`
      );
      break;
    }

    console.log(
      `${colors.blue}${colors.bright}⚛️  Creating component: ${arg}${colors.reset}\n`
    );

    const componentDir = path.join(process.cwd(), 'src', 'components', arg);
    const componentFile = path.join(componentDir, `${arg}.jsx`);
    const styleFile = path.join(componentDir, `${arg}.module.css`);
    const indexFile = path.join(componentDir, 'index.js');

    const componentTemplate = `import styles from './${arg}.module.css';
import PropTypes from 'prop-types';

function ${arg}({ children, className = '' }) {
  return (
    <div className={\`\${styles.container} \${className}\`}>
      <h2>${arg} Component</h2>
      <p>This is the ${arg} component.</p>
      {children}
    </div>
  );
}

${arg}.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ${arg};
`;

    const styleTemplate = `.container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.container:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container h2 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.5rem;
}

.container p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}
`;

    const indexTemplate = `export { default } from './${arg}';
`;

    try {
      if (fs.existsSync(componentDir)) {
        console.log(
          `${colors.yellow}⚠️  Component already exists at: ${componentDir}${colors.reset}\n`
        );
        break;
      }

      fs.mkdirSync(componentDir, { recursive: true });
      fs.writeFileSync(componentFile, componentTemplate);
      fs.writeFileSync(styleFile, styleTemplate);
      fs.writeFileSync(indexFile, indexTemplate);

      console.log(
        `${colors.green}✓${colors.reset} Component created at: ${colors.cyan}${componentDir}${colors.reset}`
      );
      console.log(`${colors.dim}  Files created:${colors.reset}`);
      console.log(`${colors.dim}  - ${arg}.jsx${colors.reset}`);
      console.log(`${colors.dim}  - ${arg}.module.css${colors.reset}`);
      console.log(`${colors.dim}  - index.js${colors.reset}\n`);
    } catch (error) {
      console.error(
        `${colors.red}✗${colors.reset} Failed to create component: ${error.message}\n`
      );
    }
    break;

  case 'create:page':
    if (!arg) {
      console.log(
        `${colors.red}✗ Please provide page name: npm run create:page About${colors.reset}\n`
      );
      break;
    }

    if (!isValidName(arg)) {
      console.log(
        `${colors.red}✗ Page name must start with uppercase and contain only letters/numbers${colors.reset}\n`
      );
      break;
    }

    console.log(
      `${colors.blue}${colors.bright}📄 Creating page: ${arg}${colors.reset}\n`
    );

    const pageDir = path.join(process.cwd(), 'src', 'pages');
    const pageFile = path.join(pageDir, `${arg}.jsx`);

    const pageTemplate = `import { useEffect } from 'react';

function ${arg}() {
  useEffect(() => {
    document.title = '${arg} | Your App Name';
  }, []);

  return (
    <div className="page-container">
      <h1>${arg} Page</h1>
      <p>Welcome to the ${arg} page.</p>
    </div>
  );
}

export default ${arg};
`;

    try {
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }

      if (fs.existsSync(pageFile)) {
        console.log(
          `${colors.yellow}⚠️  Page already exists at: ${pageFile}${colors.reset}\n`
        );
        break;
      }

      fs.writeFileSync(pageFile, pageTemplate);
      console.log(
        `${colors.green}✓${colors.reset} Page created at: ${colors.cyan}${pageFile}${colors.reset}\n`
      );
    } catch (error) {
      console.error(
        `${colors.red}✗${colors.reset} Failed to create page: ${error.message}\n`
      );
    }
    break;

  case 'create:hook':
    if (!arg) {
      console.log(
        `${colors.red}✗ Please provide hook name: npm run create:hook useCustomHook${colors.reset}\n`
      );
      break;
    }

    if (!arg.startsWith('use') || !/^use[A-Z][a-zA-Z0-9]*$/.test(arg)) {
      console.log(
        `${colors.red}✗ Hook name must start with 'use' followed by uppercase letter${colors.reset}\n`
      );
      break;
    }

    console.log(
      `${colors.blue}${colors.bright}🪝 Creating custom hook: ${arg}${colors.reset}\n`
    );

    const hookDir = path.join(process.cwd(), 'src', 'hooks');
    const hookFile = path.join(hookDir, `${arg}.js`);

    const hookTemplate = `import { useState, useEffect } from 'react';

/**
 * ${arg} - Custom React hook
 * @param {*} initialValue - Initial value for the hook
 * @returns {Array} Hook state and setter
 */
function ${arg}(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Add your effect logic here
    console.log('${arg} mounted or value changed:', value);

    return () => {
      // Cleanup logic here
      console.log('${arg} cleanup');
    };
  }, [value]);

  return [value, setValue];
}

export default ${arg};
`;

    try {
      if (!fs.existsSync(hookDir)) {
        fs.mkdirSync(hookDir, { recursive: true });
      }

      if (fs.existsSync(hookFile)) {
        console.log(
          `${colors.yellow}⚠️  Hook already exists at: ${hookFile}${colors.reset}\n`
        );
        break;
      }

      fs.writeFileSync(hookFile, hookTemplate);
      console.log(
        `${colors.green}✓${colors.reset} Hook created at: ${colors.cyan}${hookFile}${colors.reset}\n`
      );
    } catch (error) {
      console.error(
        `${colors.red}✗${colors.reset} Failed to create hook: ${error.message}\n`
      );
    }
    break;

  case 'dev':
    console.log(
      `${colors.blue}${colors.bright}🚀 Starting development server...${colors.reset}\n`
    );
    runCommand('npm run dev', 'Starting Vite dev server');
    break;

  case 'build':
    console.log(
      `${colors.blue}${colors.bright}🏗️  Building for production...${colors.reset}\n`
    );
    runCommand('npm run build', 'Building project');
    break;

  case 'lint':
    console.log(
      `${colors.blue}${colors.bright}🔍 Linting code...${colors.reset}\n`
    );
    runCommand('npm run lint', 'Running ESLint');
    break;

  case 'format':
    console.log(
      `${colors.blue}${colors.bright}✨ Formatting code...${colors.reset}\n`
    );
    if (commandExists('prettier')) {
      runCommand(
        'prettier --write "src/**/*.{js,jsx,css,json}"',
        'Formatting with Prettier'
      );
    } else {
      console.log(
        `${colors.yellow}⚠️  Prettier not installed. Run: npm install -D prettier${colors.reset}\n`
      );
    }
    break;

  case 'info':
    console.log(
      `${colors.blue}${colors.bright}ℹ️  Project Information${colors.reset}\n`
    );

    try {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
      const packageJson = JSON.parse(packageJsonContent);

      console.log(`${colors.cyan}Name:${colors.reset} ${packageJson.name}`);
      console.log(
        `${colors.cyan}Version:${colors.reset} ${packageJson.version}`
      );
      console.log(
        `${colors.cyan}Description:${colors.reset} ${packageJson.description || 'N/A'}`
      );

      // Node and npm versions
      const nodeVersion = runCommand('node --version', 'Getting Node version', {
        silent: true,
      });
      const npmVersion = runCommand('npm --version', 'Getting npm version', {
        silent: true,
      });

      if (nodeVersion.success) {
        console.log(
          `${colors.cyan}Node:${colors.reset} ${nodeVersion.output.trim()}`
        );
      }
      if (npmVersion.success) {
        console.log(
          `${colors.cyan}npm:${colors.reset} ${npmVersion.output.trim()}\n`
        );
      }

      console.log(
        `${colors.yellow}Dependencies (${Object.keys(packageJson.dependencies || {}).length}):${colors.reset}`
      );
      Object.entries(packageJson.dependencies || {}).forEach(
        ([name, version]) => {
          console.log(
            `  ${colors.green}•${colors.reset} ${name}: ${colors.dim}${version}${colors.reset}`
          );
        }
      );

      console.log(
        `\n${colors.yellow}Dev Dependencies (${Object.keys(packageJson.devDependencies || {}).length}):${colors.reset}`
      );
      Object.entries(packageJson.devDependencies || {}).forEach(
        ([name, version]) => {
          console.log(
            `  ${colors.magenta}•${colors.reset} ${name}: ${colors.dim}${version}${colors.reset}`
          );
        }
      );

      console.log('');
    } catch (error) {
      console.error(
        `${colors.red}✗${colors.reset} Failed to read project info: ${error.message}\n`
      );
    }
    break;

  default:
    console.log(
      `${colors.red}✗ Unknown command:${colors.reset} ${resolvedCommand}\n`
    );
    console.log(`${colors.yellow}Available commands:${colors.reset}`);
    console.log(`
  ${colors.cyan}1${colors.reset}  clean                - Remove node_modules, dist, and reinstall deps
  ${colors.cyan}2${colors.reset}  clean:cache          - Clear npm & Vite cache and reinstall
  ${colors.cyan}3${colors.reset}  update:check         - Check for outdated packages
  ${colors.cyan}4${colors.reset}  fresh                - Full cleanup + reinstall
  ${colors.cyan}5${colors.reset}  audit:check          - Check security vulnerabilities
  ${colors.cyan}6${colors.reset}  dev                  - Run development server
  ${colors.cyan}7${colors.reset}  build                - Build for production
  ${colors.cyan}8${colors.reset}  preview              - Preview production build
  ${colors.cyan}create:component${colors.reset} <Name> - Generate a new React component
  ${colors.cyan}create:page${colors.reset} <Name>      - Generate a new React page
  ${colors.cyan}create:hook${colors.reset} <Name>      - Generate a new custom React hook
  ${colors.cyan}update:all${colors.reset}              - Update all dependencies
  ${colors.cyan}update:minor${colors.reset}            - Update to latest minor versions
  ${colors.cyan}update:patch${colors.reset}            - Update to latest patch versions
  ${colors.cyan}lint${colors.reset}                    - Run ESLint
  ${colors.cyan}format${colors.reset}                  - Format code using Prettier
  ${colors.cyan}info${colors.reset}                    - Display project details
  ${colors.cyan}analyze${colors.reset}                 - Analyze bundle size
  ${colors.cyan}audit:fix${colors.reset}               - Automatically fix vulnerabilities
`);
    break;
}
