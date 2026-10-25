import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Nome do repositório no GitHub Pages: https://<usuario>.github.io/Projeto-Trainees-Front/
  base: '/Projeto-Trainees-Front/',
  plugins: [react()],
  server: {
    open: true,
  },
})
