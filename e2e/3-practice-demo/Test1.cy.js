///<reference types="cypress"/>


it('google search', ()=> {

    cy.visit('https://google.com')
    cy.get('#APjFqb').type('cypress automation testing{Enter}')
    cy.contains('Cypress:').click
    //cy.contains('Google Search').click()
    
    
})