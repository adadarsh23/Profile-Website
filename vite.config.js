import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import ViteSitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: true }), compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }), VitePWA({ registerType: 'autoUpdate', workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] } }),
  ViteSitemap({
    hostname: 'https://adadarsh23.netlify.app',
  })
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react'
            if (id.includes('lodash')) return 'vendor_lodash'
            if (id.includes('framer-motion')) return 'vendor_framer-motion'
            // All node_modules go into vendor chunk
            return 'vendor';
          }
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,     // Removes console.log statements
        drop_debugger: true,   // Removes debugger statements
      }
    }
  }
});
