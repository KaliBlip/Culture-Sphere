import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/pexels': {
        target: 'https://api.pexels.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pexels/, ''),
        secure: false
      }
    }
  },
  base: '/Culture-Sphere/src/',
});
