import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');
  
  // For custom domain, use root path
  const base = '/';
  
  return {
    plugins: [react()],
    base,
    build: {
      outDir: 'dist',
      sourcemap: true,
      emptyOutDir: true,
      chunkSizeWarningLimit: 1600,
    },
    server: {
      port: 3000,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(base)
    }
  };
});
