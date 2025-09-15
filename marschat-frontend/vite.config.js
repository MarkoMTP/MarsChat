import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    include: [
      "src/tests/**.test.{js,jsx}", // unit
      "src/tests/integration/**.test.{js,jsx}", // integration
    ],
  },
});
