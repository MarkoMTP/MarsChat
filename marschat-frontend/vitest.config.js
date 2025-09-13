import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "tests/**/*.test.{js,jsx}", // unit tests
      "src/tests/integration/**.test.{js,jsx}", // integration tests
    ],
  },
});
