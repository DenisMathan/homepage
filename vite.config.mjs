import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // Some imports omit the .vue extension (legacy from Vue CLI)
    extensions: ['.mjs', '.js', '.json', '.vue']
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
