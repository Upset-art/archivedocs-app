import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
      host: 'reimagined-tribble-x5qpr5r5jgw639xv-5173.app.github.dev'
    }
  }
})