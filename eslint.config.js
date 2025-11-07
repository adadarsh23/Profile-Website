// // eslint.config.js
// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import reactPlugin from 'eslint-plugin-react';
// import storybook from 'eslint-plugin-storybook';
// import { defineConfig, globalIgnores } from 'eslint/config';

// export default defineConfig([
//   globalIgnores(['dist', 'node_modules']),
//   js.configs.recommended,
//   reactHooks.configs['recommended-latest'],
//   reactRefresh.configs.vite,
//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: globals.browser,
//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//       },
//     },
//     plugins: {
//       react: reactPlugin,
//       storybook,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react/react-in-jsx-scope': 'off',
//     },
//   },
// ]);

// // eslint.config.js
// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import reactPlugin from 'eslint-plugin-react';
// import storybook from 'eslint-plugin-storybook';
// import { FlatCompat } from '@eslint/eslintrc';
// import { defineConfig, globalIgnores } from 'eslint/config';

// const compat = new FlatCompat({
//   baseDirectory: import.meta.dirname,
// });

// export default defineConfig([
//   globalIgnores(['dist', 'node_modules']),
//   js.configs.recommended,
//   reactHooks.configs['recommended-latest'],
//   reactRefresh.configs.vite,
//   ...compat.config({
//     extends: ['plugin:storybook/recommended'], // handles old-format plugins
//   }),
//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: globals.browser,
//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//       },
//     },
//     plugins: {
//       react: reactPlugin,
//       storybook,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react/react-in-jsx-scope': 'off',
//     },
//   },
// ]);

// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import storybook from 'eslint-plugin-storybook';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig, globalIgnores } from 'eslint/config';

// Create compat instance to handle old-style plugins like Storybook
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  // Modern flat configs
  js.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  // ✅ Wrap old ESLint 8-style configs here
  ...compat.config({
    extends: ['plugin:storybook/recommended'], // old-style config now handled safely
  }),

  // Your project rules
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
      storybook,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
