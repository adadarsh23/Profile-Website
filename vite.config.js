/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import ViteSitemap from 'vite-plugin-sitemap';
import legacy from '@vitejs/plugin-legacy';
import { configDefaults } from 'vitest/config';
import terminalBannerPlugin from './src/plugins/terminalBanner.jsx';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

function getManualChunk(id) {
  if (!id.includes('node_modules')) {
    return undefined;
  }

  if (
    id.includes('framer-motion') ||
    id.includes('gsap') ||
    id.includes('@gsap')
  ) {
    return 'motion';
  }

  if (
    id.includes('three') ||
    id.includes('@react-three') ||
    id.includes('postprocessing') ||
    id.includes('/ogl/')
  ) {
    return 'three-stack';
  }

  if (
    id.includes('react-markdown') ||
    id.includes('remark-gfm') ||
    id.includes('rehype-raw') ||
    id.includes('react-syntax-highlighter')
  ) {
    return 'markdown';
  }

  if (id.includes('lucide-react') || id.includes('react-icons')) {
    return 'icons';
  }

  return 'vendor';
}

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
    ...(isProd
      ? []
      : [
          terminalBannerPlugin({
            projectName: `My Profile Website v${pkg.version}`,
            showTimestamp: true,
            showEnvironment: true,
            showSystemInfo: true,
            showProjectStats: true,
            showDependencies: true,
            showStorage: true,
            customMessages: [
              'UI: React + Tailwind CSS + shadcn/ui',
              'Backend: Node.js + Express + MongoDB',
              'State: Redux Toolkit',
              'API: REST + GraphQL',
            ],
          }),
        ]),
    ...(isAnalyze
      ? [
          visualizer({
            open: true,
            filename: './stats.html',
          }),
        ]
      : []),
    ...(isProd
      ? [
          compression({
            algorithm: 'brotliCompress',
            ext: '.br',
            threshold: 1024,
          }),
          compression({
            algorithm: 'gzip',
            ext: '.gz',
            threshold: 1024,
          }),
        ]
      : []),
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
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.origin ===
              'https://ai-assistant-server-colf.onrender.com/api/gemini',
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
        name: 'Ad Adarsh Profile',
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
    ViteSitemap({
      hostname: 'https://adadarsh23.netlify.app',
      generateRobotsTxt: true,
      robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
      },
    }),
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
      '@': path.resolve(dirname, './src'),
      '@components': path.resolve(dirname, './src/components'),
      '@assets': path.resolve(dirname, './src/assets'),
      '@Data': path.resolve(dirname, './src/Data'),
      '@Main': path.resolve(dirname, './src/Main'),
      '@pages': path.resolve(dirname, './src/pages'),
      '@utils': path.resolve(dirname, './src/utils'),
      '@Modules': path.resolve(dirname, './src/Modules'),
    },
  },
  server: {
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'https://ai-assistant-server-colf.onrender.com/api/gemini',
        changeOrigin: true,
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
    chunkSizeWarningLimit: 6500,
    sourcemap: !isProd,
    cssCodeSplit: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: getManualChunk,
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
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'ogl'],
  },
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: [
      ...configDefaults.exclude,
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
    environment: 'jsdom',
    projects: [
      {
        extends: true,
      },
    ],
  },
});
