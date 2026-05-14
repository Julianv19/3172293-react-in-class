import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLTopath } from 'url'
import { dirname, resolve } from 'path'

//Crear __dirname compatible con ES Modules
const __filename = fileURLTopath(import.meta.url)
const __dirname = dirname(__filename)

//https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],resolve:{
    alias:{
      "@": resolve(__dirname, 'src'),//cuando veas @ interpretalo como / src
    },
  },
})