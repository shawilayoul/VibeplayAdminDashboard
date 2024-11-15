import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use the default output directory 'dist'
    outDir: 'dist', // This is the default, so you can remove the line if you want
    rollupOptions: {
      input: 'index.html', // Ensure the entry point is correct
    },
  },
  server: {
    port: 5173, // Adjust if necessary for local development
  },
});

