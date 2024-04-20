import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: './',
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo?.name?.split('.').at(1) || ''
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          if (/woff?/i.test(extType)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
