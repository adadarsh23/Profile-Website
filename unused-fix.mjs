#!/usr/bin/env node
/**
 * Auto-remove unused npm dependencies using depcheck.
 * ESM version with clean animated output.
 */

import { execSync } from 'child_process';
import depcheck from 'depcheck';
import process from 'process';
import chalk from 'chalk';

const root = process.cwd();

const options = {
  ignoreMatches: [
    'eslint*',
    'prettier*',
    'tailwindcss',
    // 'husky',
    // 'storybook*',
    'vitest',
  ],
  skipMissing: true,
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const logStep = async (msg) => {
  process.stdout.write(chalk.cyan(`⏳ ${msg}`));
  await delay(350);
  process.stdout.write(chalk.cyan('.'));
  await delay(350);
  process.stdout.write(chalk.cyan('.'));
  await delay(350);
  process.stdout.write(chalk.cyan('.\n'));
};

console.log(chalk.blueBright('\n🔍 Scanning for unused dependencies...\n'));

depcheck(root, options, async (result) => {
  const unused = result.unusedDependencies || [];

  await logStep('Analyzing project files');

  if (unused.length === 0) {
    console.log(
      chalk.greenBright('✔ No unused dependencies found. Project is clean.\n')
    );
    return;
  }

  console.log(
    chalk.yellowBright(`⚠ Found ${unused.length} unused package(s):\n`)
  );

  unused.forEach((pkg) => {
    console.log(chalk.yellow(' - ' + pkg));
  });

  console.log('\n' + chalk.blueBright('🚀 Starting removal process...\n'));

  for (const pkg of unused) {
    try {
      console.log(chalk.magentaBright(`📦 Removing ${pkg}...`));
      execSync(`npm uninstall ${pkg}`, { stdio: 'inherit' });
      await delay(300);
      console.log(chalk.greenBright(`✔ Removed: ${pkg}\n`));
    } catch (err) {
      console.log(chalk.red(`❌ Failed to remove ${pkg}: ${err.message}`));
    }
  }

  console.log(chalk.green.bold('🎉 Cleanup complete!\n'));
});
