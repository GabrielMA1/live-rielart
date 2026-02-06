import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Or react-swc if you prefer
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Custom domain setup for GitHub Pages
  base: '/',  // If you're deploying to the root of your custom domain, keep base as '/'

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: 'dist',  // The folder where the build files will be output
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Controls chunking behavior (optional)
      },
    },
  },
});
