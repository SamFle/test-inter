import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // très important pour bien pointer vers la racine
  build: {
    rollupOptions: {
      input: './public/index.html' // on dit explicitement à Vite de démarrer ici
    }
  }
})
