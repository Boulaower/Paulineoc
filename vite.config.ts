// Enables Vitest's type definitions in the project
/// <reference types="vitest" />

// Import the React plugin for Vite
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Export Vite configuration
export default defineConfig({
  // Add React plugin for Vite
  plugins: [react()],
  
  // Vitest configuration
  test: {
    // Enable global variables like describe, it, and expect without importing them
    globals: true,
    
    // Set the test environment to "jsdom" for simulating a browser environment
    environment: "jsdom",
  },
});
