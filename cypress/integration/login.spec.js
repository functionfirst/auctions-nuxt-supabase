import Cypress from 'cypress'

describe('Login test', () => {
  it('Can login with email and password', () => {
    const username = Cypress.env('AUTH_USERNAME')
    const password = Cypress.env('AUTH_PASSWORD')

    expect(username, 'username was set').to.be.a('string').and.not.be.empty
    if (typeof password !== 'string' || !password) {
      throw new Error('Missing password value, set using CYPRESS_password=...')
      // expect(password, 'password was set').to.be.a('string').and.not.be.empty
    }

    // load the page
    cy.visit('/')

    // click login button to goto the login page
    cy.get('#login').click()

    // assert that we land on login page
    cy.url().should('include', '/login')

    // set login credentials
    cy.get('#loginEmail').type(username)
    cy.get('#loginPassword').type(password, { log: false })

    // click login button to login
    cy.get('#loginButton').click()

    // assert that we land on the account page
    cy.url().should('include', '/account')
  })
})
