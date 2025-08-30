export default {
  test: {
    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    setupFiles: ["__tests__/setup.js"],
    sequence: { concurrent: false },
  },
};
