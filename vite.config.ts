/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  
  test: {
    // Use jsdom environment for DOM testing
    environment: 'jsdom',
    
    // Run tests without isolation for easier logging (like single thread)
    isolate: false,

    // Show console.log statements
    silent: false,

    // Use the verbose reporter to display test names
    // reporters: 'verbose',

    // Include all test files matching this pattern
    include: ["src/tests/**/*.test.tsx"],

    // Optional: global setup or teardown files
    // setupFiles: './tests/setup.ts',
  },

})
