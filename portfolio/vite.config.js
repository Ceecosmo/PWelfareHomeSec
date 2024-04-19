import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const cssfileName = 'index.min.css'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: './public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          return `assets/css/${cssfileName}`

        },
        entryFileNames: (file) => {
          return `assets/js/[name].min.js`
        }
      }
    }
  }
  
})
