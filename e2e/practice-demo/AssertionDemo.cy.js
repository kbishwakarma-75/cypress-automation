///<reference types="cypress"/>


it('Asserstion demo', ()=> {

    cy.visit('https://example.cypress.io')
    //cy.contains('Querying').click()
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-button')
        .and('be.visible')
        .and('be.enabled')

        assert.equal(3, 3, 'is equal')
   
 
    
    
})