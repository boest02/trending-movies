/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',

    isolate: false,
    silent: false,
    reporters: 'verbose',

    include: ["src/tests/**/*.test.tsx"],

    setupFiles: './src/tests/setup.ts',
  },
})
