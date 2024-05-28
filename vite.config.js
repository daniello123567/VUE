import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
"version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/static-build",
      "config": {
        "includeAssets": ["assets/**/*"]
      }
    }
  ],
  
  build: {
    assetsInclude: ['**/*.gif'],
    assetsDir: '.src/assets',
    rollupOptions: {
      external: ['vue-error-boundary'],
    },

  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@assets': './src/assets',

    }
  }
})
