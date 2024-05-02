import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_fonts.scss";
          @import "./src/styles/_media_queries.scss";
          @import "./src/styles/_grids.scss";
          @import "./src/styles/_inputs.scss";
        `
      }
    }
  },
})
