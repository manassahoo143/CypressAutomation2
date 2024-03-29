const { defineConfig } = require("cypress");

module.exports = defineConfig({
/*  defaultCommandTimeout:10000,
  pageLoadTimeout:10000,
  viewportHeight:600,
  viewportWidth:1000,
*/
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports.
      
    },
  },
});
