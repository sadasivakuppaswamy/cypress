const cypress = require('cypress');

cypress.run({
  // specs to run here
  spec: "cypress/e2e/cypress_tutorial/*.cy.{js,jsx,ts,tsx}",
// browser to run here
  browser: 'chrome'
})