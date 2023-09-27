const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
          require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    chromeWebSecurity: false, // Se agrego esta línea de código, por que cuando se abría el cypress, no podía ejecutarse ya que el sitio es inseguro y la prueba terminaba solo abriendo la pagina
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Report Testing Saucedo",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    debug: true,
  },
});