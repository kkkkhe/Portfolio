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
    strategies: 'injectManifest',
    registerType: 'autoUpdate',
    injectManifest: {
      globDirectory: 'dist/',
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,woff,ttf}'],
      swDest: 'dist/sw.js',
      maximumFileSizeToCacheInBytes: 30000000
    },
    srcDir: 'src',
    filename: 'sw.ts',
    workbox: {
      importScripts: ["sw.js"]
    },
    manifest: {
      name: 'xxxxxxxx',
      short_name: 'xxxxxx',
      description: "xxxxxxxxxx",
      display: "standalone",
      theme_color: '#000000',
      background_color: "#ffffff",
      icons: [
        {
          src: "icons/and-96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "icons/120.png",
          sizes: "120x120",
          type: "image/png"
        },
        {
          src: "icons/192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "icons/256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "icons/512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: 'any maskable'
        }
      ]
    },
    devOptions: {
      navigateFallbackAllowlist: [/^index.html$/],
      type: 'module',
      enabled: true
    },
  })
  ],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
// workbox: {
//   globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,woff,ttf}'],
//   cleanupOutdatedCaches: true,
//   globDirectory:'dist/',
//   swDest: 'dist/sw.js',
//   runtimeCaching: [
//     {
//       urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
//       handler: 'CacheFirst',
//       options: {
//         cacheName: 'google-fonts-cache',
//         expiration: {
//           maxEntries: 10,
//           maxAgeSeconds: 60 * 60 * 24
//         },
//         cacheableResponse: {
//           statuses: [0, 200]
//         }
//       }
//     },
//     {
//       urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
//       handler: 'CacheFirst',
//       options: {
//         cacheName: 'gstatic-fonts-cache',
//         expiration: {
//           maxEntries: 10,
//           maxAgeSeconds: 60 * 60 * 24
//         },
//         cacheableResponse: {
//           statuses: [0, 200]
//         },
//       }
//     },
//     ^https:\/\/st\.kp\.yandex\.net\/.*
//     ^https://firebasestorage\.googleapis\.com/.*media&token'
//     http:\/\/127\.0\.0\.1:5173/.*react-icons
//     {
//       urlPattern: RegExp('http:\/\/127\.0\.0\.1:5173/*react-icons_si.js'),
//       handler: 'CacheFirst',
//       options: {
//         cacheName: 'cross-origin',
//         expiration: {
//           maxAgeSeconds: 60 * 60 * 24
//         },
//         cacheableResponse: {
//           statuses: [0, 200]
//         }
//       }
//     },
//   ]
// }