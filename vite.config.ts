/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // allows using `it()` and `describe()` without imports
    environment: "jsdom", // needed for React Testing Library
    include: ["src/tests/**/*.test.{ts,tsx}"],
    reporters: ["verbose"], // shows both describe and it text
  },

})
