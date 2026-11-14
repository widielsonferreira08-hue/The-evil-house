import { defineConfig } from 'vite';

// base './' makes the build work on GitHub Pages (any repo name) and from any sub-folder.
export default defineConfig({
  base: './',
  build: { target: 'es2020', chunkSizeWarningLimit: 900 },
  server: { host: true, port: 5173 },
});
