import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
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
