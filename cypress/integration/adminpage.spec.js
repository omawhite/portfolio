/**
 * Test that the netlify cms admin page properly loads
 */
describe('Admin page', () => {
  before(() => {
    cy.visit('/admin')
  })

  it('should land on admin login page', () => {
    cy.get('.css-1qcpzq-LoginButton-button-default-gray-disabled')
    cy.get('.css-1qcpzq-LoginButton-button-default-gray-disabled')
  })
})