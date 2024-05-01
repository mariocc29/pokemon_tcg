import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_fonts.scss";
          @import "./src/styles/_media_queries.scss";
          @import "./src/styles/_grids.scss";
        `
      }
    }
  },
})
