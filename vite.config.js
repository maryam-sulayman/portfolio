import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('VITE CONFIG LOADED ✅')

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // listen on all interfaces so ngrok can reach it
    port: 5173,
    strictPort: true,
    allowedHosts: true // <- disable the block, accept all hosts (ngrok etc)
  },
})
