import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // BASE_PATH='/' saat build untuk InfinityFree (subdomain root);
  // default '/siap-panakkukang/' untuk GitHub Pages.
  base: process.env.BASE_PATH || '/siap-panakkukang/',
})
