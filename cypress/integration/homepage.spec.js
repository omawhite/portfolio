/**
 * Tests that home page properly loads
 */
describe('Home page', () => {
  before(() => {
    cy.visit('/')
  })

  it('should land on homepage', () => {
    cy.get('.css-ajj2pt-Header')
    cy.get('article')
    cy.get('article > header')
    cy.get('.css-3rdz6s-Footer')
  })
})