import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Build options
    outDir: 'build', // You can adjust this if needed
    rollupOptions: {
      input: 'index.html', // Ensure the entry point is correct
    },
  },
  server: {
    port: 5173, // Adjust if necessary for local development
  },
});
