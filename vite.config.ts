import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// ES Module equivalent of __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '(components)': path.resolve(__dirname, './src/(components)'),
    }
  },
  server: {
    host: true,
    allowedHosts: [
      '.trycloudflare.com',
      '.loca.lt',
      'clarke-vocabulary-safely-reveal.trycloudflare.com',
      'survivor-capital-reasons-knew.trycloudflare.com',
    ],
    hmr: {
      clientPort: 443,
    },
  }
})
