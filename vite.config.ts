import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  react(),
  VitePWA({
    injectRegister: 'auto',
    strategies: 'generateSW',
    srcDir: 'src',
    filename: 'sw.ts',
    devOptions: {
      navigateFallbackAllowlist: [/^index.html$/],
      type: 'module',
      enabled: true
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg, webp}'],
      cleanupOutdatedCaches: true,
      globDirectory:'.',
      swDest: path.resolve('dist', 'sw.js'),
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24
            },
            cacheableResponse: {
              statuses: [0, 200]
            },
          }
        },
        //^https:\/\/st\.kp\.yandex\.net\/.*
        //^https://firebasestorage\.googleapis\.com/.*media&token'
        //http:\/\/127\.0\.0\.1:5173/.*react-icons
        {
          urlPattern: RegExp('http:\/\/127\.0\.0\.1:5173/*react-icons_si.js'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'cross-origin',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
      ]
    }
  })
  ],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
