import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jatarhi-draft-two/', 
  plugins: [react()],
})