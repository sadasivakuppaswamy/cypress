describe(['file operation'],'Example for writeFile and readFile', function () {

    it(['write'],'Write to a text file test1.txt using writeFile', function () {
        cy.writeFile('cypress/fixtures/test1.txt', 'Testmaster.com\n')
    })

    it(['write','append'],'Append content to the end of the text file test1.txt using the flag a+', function () {
        cy.writeFile('cypress/fixtures/test1.txt', 'Info Hub for Testers', { flag: 'a+' })
    })

    it(['json'],'Write to a JSON file test2.json using writeFile', function () {
        cy.writeFile('cypress/fixtures/test2.json', { firstname: 'sadasiva', lastname: 'kuppaswamy' })
       // cy.writeFile('cypress/fixtures/test2.json', { firstname: 'sarala', lastname: 'muniyappa' },{flag:'a+'})

    })

    it(['json'],'Validate the content of both text and JSON file using readFile', function () {
        cy.readFile('cypress/fixtures/test1.txt').should('contain', 'Testmaster')
        cy.readFile('cypress/fixtures/test1.txt').should('eq', 'Testmaster.com\nInfo Hub for Testers')
        cy.readFile('cypress/fixtures/test2.json').its('firstname').should('eq', 'sadasiva')
    })
   
})