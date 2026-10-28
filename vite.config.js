import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// The live site is served from https://unclehanz.github.io/tapit/, so the built files need the
// /tapit/ base path. The dev server (npm run dev) keeps using / so nothing changes locally.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/tapit/' : '/',
  plugins: [react()],
}))
