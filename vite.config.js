/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import ViteSitemap from 'vite-plugin-sitemap';
// import removeConsole from 'vite-plugin-remove-console';
// import terser from '@rollup/plugin-terser';
import legacy from '@vitejs/plugin-legacy'; // ✅ for old browsers support
import { configDefaults } from 'vitest/config';
import terminalBannerPlugin from './src/plugins/terminalBanner.jsx';
import { readFileSync } from 'fs';

// Read package.json for version
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

// ✅ Custom Terminal Banner Plugin

export default defineConfig({
  base: '/',
  logLevel: 'info',
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
      babel: {
        babelrc: false,
        configFile: false,
      },
    }),
    tailwindcss(),
    terminalBannerPlugin({
      projectName: `My Profile Website v${pkg.version}`,
      showTimestamp: true,
      showEnvironment: true,
      showSystemInfo: true,
      showProjectStats: true,
      showDependencies: true,
      showStorage: true,
      customMessages: [
        '🎨 UI: React + Tailwind CSS + shadcn/ui',
        '🔥 Backend: Node.js + Express + MongoDB',
        '🚀 State: Redux Toolkit',
        '📡 API: REST + GraphQL',
      ],
    }),
    // ✅ Bundle Visualizer - only run when ANALYZE=true
    ...(isAnalyze
      ? [
        visualizer({
          open: true, // Set to true to automatically open the report in your browser
          filename: './stats.html',
        }),
      ]
      : []),
    // removeConsole(),
    // ✅ Compression for production (Brotli + Gzip)
    ...(isProd
      ? [
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 1024, // Compress files > 1KB
        }),
        compression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 1024,
        }),
      ]
      : []),
    // PWA plugin
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon-57x57.png',
        'apple-touch-icon-60x60.png',
        'apple-touch-icon-72x72.png',
        'apple-touch-icon-76x76.png',
        'apple-touch-icon-114x114.png',
        'apple-touch-icon-120x120.png',
        'apple-touch-icon-144x144.png',
        'apple-touch-icon-152x152.png',
        'apple-touch-icon-180x180.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
      ],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        maximumFileSizeToCacheInBytes: 7 * 1024 * 1024,
        // 7 MB
        runtimeCaching: [
          // Cache API calls to your backend
          {
            urlPattern: ({ url }) => url.origin === 'https://ai-assistant-server-colf.onrender.com/api/gemini',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'ai-assistant-api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 5 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Âd Adarsh Profile',
        short_name: 'Adarsh',
        description: 'Profile of Ad Adarsh',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        lang: 'en',
        orientation: 'portrait',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    // Sitemap plugin
    ViteSitemap({
      hostname: 'https://adadarsh23.netlify.app',
      generateRobotsTxt: true,
      robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
      },
    }),
    // ✅ Legacy plugin for IE11 / old Safari / old mobile browsers
    // Only enable legacy builds when explicitly requested via LEGACY_BUILD=true.
    // Legacy bundles can alter module loading order and cause runtime issues in the
    // generated vendor chunks. Disable by default for modern deployments.
    ...(process.env.LEGACY_BUILD === 'true'
      ? [
        legacy({
          targets: ['defaults', 'Android >= 6', 'iOS >= 12'],
          additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        }),
      ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@Data': path.resolve(__dirname, './src/Data'),
      '@Main': path.resolve(__dirname, './src/Main'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@Modules': path.resolve(__dirname, './src/Modules'),
    },
  },
  server: {
    open: true,
    host: true, // ✅ allows testing from other devices in LAN
    proxy: {
      // Proxy API requests to your backend server during development
      '/api': {
        target: 'https://ai-assistant-server-colf.onrender.com/api/gemini',
        changeOrigin: true,
        // Optional: if your backend doesn't have the '/api' prefix
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    modulePreload: {
      polyfill: true,
    },
    minify: isProd ? 'terser' : false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 5000,
    sourcemap: !isProd,
    cssCodeSplit: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (!id.includes('node_modules')) return;

        //   if (id.includes('react-dom')) return 'react-dom';
        //   if (id.includes('react')) return 'react';
        //   if (id.includes('react-router-dom')) return 'router';
        //   if (id.includes('framer-motion')) return 'motion';

        //   return 'vendor';
        // }
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        keep_classnames: true,
        keep_fnames: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lodash',
      'ogl',
    ],
  },
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: [
      ...configDefaults.exclude,
      // includes node_modules, dist, etc.
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
    environment: 'jsdom',
    // or 'node' depending on your tests
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
