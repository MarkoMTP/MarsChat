import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{js,jsx}"], // default unit tests
    projects: [
      {
        name: "integration",
        test: {
          include: ["tests/integration/**/*.test.{js,jsx}"],
        },
      },
    ],
  },
});
