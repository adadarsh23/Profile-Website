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
export default defineConfig(({ mode }) => {
  const isAnalyze = process.env.ANALYZE === 'true' || mode === 'analyze';
  const isProd =
    process.env.NODE_ENV === 'production' || mode === 'production' || isAnalyze;
  const isTest = Boolean(process.env.VITEST);

  return {
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
      ...(!isProd && !isTest
        ? [
            terminalBannerPlugin({
              projectName: `My Profile Website v${pkg.version}`,
              showTimestamp: true,
              showEnvironment: true,
              showSystemInfo: true,
              showProjectStats: true,
              showDependencies: true,
              showStorage: true,
              customMessages: [
                'UI: React + Tailwind CSS',
                'Portfolio: Âd Adarsh Music Portfolio',
              ],
            }),
          ]
        : []),
      ...(isAnalyze
        ? [
            visualizer({
              open: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              brotliSize: true,
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
        generateRobotsTxt: false,
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
        '@data': path.resolve(dirname, './src/data'),
        '@pages': path.resolve(dirname, './src/pages'),
        '@styles': path.resolve(dirname, './src/styles'),
        '@hooks': path.resolve(dirname, './src/hooks'),
        '@lib': path.resolve(dirname, './src/lib'),
        '@config': path.resolve(dirname, './src/config'),
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
      // Terser gives better dead-code elimination than esbuild's minifier,
      // especially for large dependency trees like Three.js / framer-motion.
      minify: isProd ? 'terser' : false,
      terserOptions: isProd
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log', 'console.info', 'console.debug'],
            },
            mangle: { safari10: true },
            format: { comments: false },
          }
        : undefined,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      chunkSizeWarningLimit: 1500,
      // 'hidden' = source maps are generated (for Sentry upload) but the
      // //# sourceMappingURL= comment is omitted, so browsers never load them.
      sourcemap: isProd ? 'hidden' : true,
      cssCodeSplit: true,
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (!id.includes('node_modules')) return;

            // Extract exact package name (handles scoped packages like @sentry/react)
            const match = id.match(
              /[\\/]node_modules[\\/](?:(@[^\\/]+[\\/][^\\/]+)|([^\\/]+))/
            );
            const pkg = match ? match[1] || match[2] : null;
            if (!pkg) return;

            // 1. Core React runtime
            if (
              pkg === 'react' ||
              pkg === 'react-dom' ||
              pkg === 'scheduler' ||
              pkg === 'react-router' ||
              pkg === 'react-router-dom'
            ) {
              return 'vendor-react';
            }

            // 2. Three.js & 3D rendering
            if (
              pkg === 'three' ||
              pkg.startsWith('@react-three/') ||
              pkg === 'three-stdlib' ||
              pkg === 'postprocessing' ||
              pkg === 'camera-controls' ||
              pkg === 'troika-three-text' ||
              pkg === 'suspend-react' ||
              pkg === 'its-fine'
            ) {
              return 'vendor-three';
            }

            // 3. Animation libraries
            if (
              pkg === 'framer-motion' ||
              pkg === 'gsap' ||
              pkg === '@gsap/react' ||
              pkg === 'lenis'
            ) {
              return 'vendor-animation';
            }

            // 4. WebGL Math & noise (exact match prevents 'logrocket' from being matched by 'ogl')
            if (
              pkg === 'ogl' ||
              pkg === 'gl-matrix' ||
              pkg === 'simplex-noise'
            ) {
              return 'vendor-webgl';
            }

            // 5. Markdown & syntax highlighting
            if (
              pkg === 'react-markdown' ||
              pkg === 'remark-gfm' ||
              pkg === 'rehype-raw' ||
              pkg === 'react-syntax-highlighter' ||
              pkg.startsWith('remark-') ||
              pkg.startsWith('rehype-') ||
              pkg.startsWith('micromark') ||
              pkg.startsWith('unified') ||
              pkg.startsWith('unist-') ||
              pkg.startsWith('vfile') ||
              pkg.startsWith('hast-') ||
              pkg.startsWith('mdast-')
            ) {
              return 'vendor-markdown';
            }

            // 6. Monitoring & Analytics
            if (
              pkg.startsWith('@sentry/') ||
              pkg === 'logrocket' ||
              pkg.startsWith('@statsig/') ||
              pkg === 'react-ga4'
            ) {
              return 'vendor-monitoring';
            }

            // 7. UI primitives — long-lived, rarely changes → best for caching
            if (
              pkg.startsWith('@radix-ui/') ||
              pkg === 'lucide-react' ||
              pkg === 'react-icons' ||
              pkg === 'class-variance-authority' ||
              pkg === 'clsx' ||
              pkg === 'tailwind-merge'
            ) {
              return 'vendor-ui';
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'ogl',
      ],
    },
    test: {
      testTimeout: 20000,
      include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: [
        ...configDefaults.exclude,
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
      ],
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        reportsDirectory: './coverage',
      },
      projects: [
        {
          extends: true,
        },
      ],
    },
  };
});
