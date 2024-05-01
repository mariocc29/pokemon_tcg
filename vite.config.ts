import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@config': '/src/config',
      '/@assets/': '/src/assets/',
      '/@hooks/': '/src/hooks/',
      '/@layouts/': '/src/layouts/',
      '/@pages/': '/src/pages/',
      '/@services/': '/src/services/',
      '/@shared/': '/src/shared/',
      '/@state/': '/src/state/',
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
        `
      }
    }
  },
})
