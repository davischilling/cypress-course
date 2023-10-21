const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ikiojo",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
