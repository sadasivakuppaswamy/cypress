//const { eq } = require("cypress/types/lodash")
/// <reference types="cypress" />
context('Fixtures verification', () => {
    describe('Verify fixtures',()=>{
        before(()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.fixture('testdata').then(function (userdata){
                this.testdata=userdata
            })
        })
        it('Validate successful Login', function () {
            cy.get('input[name="username"]').type(this.testdata.username)
            cy.get('input[name="password"]').type(this.testdata.password)
            cy.get('button[type="submit"]').click()
            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', this.testdata.welcomeText)
            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains(this.testdata.welcomeText)
        
        })
    }
    )
})
