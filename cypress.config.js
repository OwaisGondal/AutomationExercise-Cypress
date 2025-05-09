const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "opvmkb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://automationexercise.com/",
    specPattern: "cypress/e2e/tests/*",
  },

});
