// / <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      // Google Fonts API V2
      google: {
        /**
         * enable preconnect link injection
         *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
         * default: true
         */
        preconnect: false,

        /**
         * values: auto, block, swap(default), fallback, optional
         * default: 'swap'
         */
        display: 'block',

        /**
         * define which characters to load
         * default: undefined (load all characters)
         */
        text: 'ViteAwesome',

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: 'head-prepend',

        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (only regular 400 will be loaded)
          'Source Sans Pro',

          // or objects
          {
            /**
             * Family name (required)
             */
            name: 'Roboto',

            /**
             * Family styles
             */
            styles: 'ital,wght@0,400;1,200',

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
          {
            name: 'MartelSans', // New font family
            styles: 'wght@400;700', // Specify font weights
            defer: true,
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup',
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@data': path.resolve(__dirname, '/src/data'),
      '@fonts': path.resolve(__dirname, '/src/assets/fonts'),
      '@services': path.resolve(__dirname, '/src/services'),
      '@src': path.resolve(__dirname, '/src'),
      '@types': path.resolve(__dirname, '/src/types'),
    },
  },
});
