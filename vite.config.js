import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths so the built site works from any GitHub Pages
  // URL (which serves the site from a /repo-name/ subfolder).
  base: './',
  plugins: [react()],
})
