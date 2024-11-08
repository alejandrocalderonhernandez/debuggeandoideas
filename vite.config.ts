import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://debuggeandoideas.net/', // URL completa
  build: {
    outDir: 'dist',
  }
})