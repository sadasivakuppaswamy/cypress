//const { eq } = require("cypress/types/lodash")
/// <reference types="cypress" />
context('Fixtures verification', () => {
    describe('Verify fixtures',{ testIsolation: false },()=>{
        before(function () {
            // ensure clean test slate for these tests
            cy.then(Cypress.session.clearCurrentSessionData)
            cy.visit('https://opensource-demo.orangehrmlive.com/')
        })
    
        beforeEach(function () {
            cy.fixture('testdata').then(function (testdata) {
                this.testdata = testdata
            })
        })
        it('Validate successful Login', function () {
            cy.get('input[name="username"]').type(this.testdata.username)
            cy.get('input[name="password"]').type(this.testdata.password)
            cy.get('button[type="submit"]').click()
            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', this.testdata.welcomeText)
            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains(this.testdata.welcomeText)
        
        })
        it('Validate all the Quick Launch Texts', function () {
            cy.get('div[class="orangehrm-quick-launch-heading"] > p').each(($el, index) => {
                expect($el).to.contain(this.testdata.quickLaunch[index])
            })
        })
    }
    )
})
