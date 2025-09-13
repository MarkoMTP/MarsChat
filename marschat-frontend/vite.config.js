// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,
    environment: "jsdom", // default test env
    setupFiles: "./src/setupTests.js",
    include: ["tests/**.test.{js,jsx}"], // normal unit tests
  },
});
