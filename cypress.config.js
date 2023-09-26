const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ujq9mb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
    chromeWebSecurity: false
  },
});
