import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'wss',   // important : utilise WebSocket sécurisé
      host: 'app.github.dev', // domaine proxy de Codespaces
      clientPort: 443     // force le WS à passer par HTTPS
    }
  }
})
