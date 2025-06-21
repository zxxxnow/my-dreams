import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/my-dreams/', // ✅ this fixes asset paths for GitHub Pages
  plugins: [
    react(),
    tailwindcss()
  ]
});
