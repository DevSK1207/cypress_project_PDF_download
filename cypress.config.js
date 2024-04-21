const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://intellipaat.com/blog/tutorial/selenium-tutorial/selenium-cheat-sheet/',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mocha",
    "overwrite": false,
    "html": false,
    "json": true
  }
});
