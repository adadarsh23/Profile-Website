// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
// import storybookPlugin from 'eslint-plugin-storybook';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig, globalIgnores } from 'eslint/config';

// Compat instance to handle old-style configs
const compat = new FlatCompat({
  baseDirectory: import.meta.url, // fixed dirname
});

export default defineConfig([
  // Ignore these folders globally
  globalIgnores(['dist', 'node_modules']),

  // Core recommended JS rules
  js.configs.recommended,

  // Wrap old ESLint 8-style configs safely
  ...compat.config({
    extends: ['plugin:storybook/recommended'],
  }),

  // Your project-specific rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
