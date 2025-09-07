import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    hmr: {
      port: 5173
    },
    // Forcer HTTP/1.1
    https: false,
    http2: false
  }
})