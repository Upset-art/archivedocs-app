import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const codespace = process.env.CODESPACE_NAME
  ? `${process.env.CODESPACE_NAME}-5173.app.github.dev`
  : 'localhost'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'wss',
      host: codespace,
      clientPort: 443,
    },
  },
})
