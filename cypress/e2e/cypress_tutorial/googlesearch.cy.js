//const { eq } = require("cypress/types/lodash")
/// <reference types="cypress" />
context('GoogleSearch', () => {
    describe('Verify search in google and search results shown',()=>{
        beforeEach(()=>{
            cy.visit("https://google.com")
        })
        it('verify title',()=>{
            cy.title().should('eq','Google')
        })
        it('search for cypress',()=>{
            cy.get('textarea[title="Search"]').type('Cypress tutorial')
            cy.wait(100)
            cy.get('input[value="Google Search"]').click({ multiple: true })
        })
    }
    )
})
