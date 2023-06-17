const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false, // when your application has a URL and then from there you want to go to a completely different URL
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      require('@cypress/grep/src/plugin')(config);
      return config;
     
    },
    supportFile: "cypress/support/e2e.js",
    specPattern:
      ["**/*.feature", "cypress/e2e/cypress_tutorial/*.cy.{js,jsx,ts,tsx}"],
    
  },
  "reporter": "node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
        "overwrite": false,
        "html": false,
        "json": true
    }

  
});
