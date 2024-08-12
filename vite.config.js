import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/6roup/',  // Asegúrate de que este sea el nombre correcto de tu repositorio en GitHub
  build: {
    outDir: 'dist'  // Esto es opcional si 'dist' ya es el valor por defecto, pero puedes dejarlo para mayor claridad
  }
})
