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
  it('footer should contain social links', () => {
    cy.get('[href="https://twitter.com/louiswhite3019"]')
    cy.get('[href="https://github.com/omawhite"]')
    cy.get('[href="https://dev.to/omawhite"]')
    cy.get('[href="https://www.linkedin.com/in/omar-white-29b66ba3/"]')
  })
  it('should navigate to article', () => {
    cy.get('article > header').click()
    cy.get('article > header')
    cy.get('.css-1g99khu-PostFooter')
  })
  it('should navigate back to home page', () => {
    cy.get('.css-4p1dye-Title').click()
    cy.get('.css-ajj2pt-Header')
    cy.get('article')
    cy.get('article > header')
    cy.get('.css-3rdz6s-Footer')
  })
})