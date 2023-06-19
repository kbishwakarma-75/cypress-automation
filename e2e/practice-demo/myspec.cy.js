///<reference types="Cypress"/>


describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

describe('My First Test',function(){
it('Visit the kitchen sink',function(){
  cy.visit('https://example.cypress.io')
  cy.contains('type').click()
  cy.url().should('include', '/commands/actions')
  //cy.get(':nth-child(2) > .well').should('include','Email address')
  cy.contains('Email address').should('contain','Email')
  cy.get('.action-email').type('fake@email.com')
  cy.get('.action-email').should('have.value','fake@email.com')
  
 
})
})