describe('various example tests', () => {
  beforeEach(() => {
    cy.visit('/examples')
  })

  it('multi-page testing', () => {
    cy.getDataTest('nav-link-home').click()
    cy.location('pathname').should('equal', '/')

    cy.getDataTest('nav-link-overview').click()
    cy.location('pathname').should('equal', '/overview')

    cy.getDataTest('nav-link-fundamentals').click()
    cy.location('pathname').should('equal', '/fundamentals')

    cy.getDataTest('nav-link-forms').click()
    cy.location('pathname').should('equal', '/forms')

    cy.getDataTest('nav-link-examples').click()
    cy.location('pathname').should('equal', '/examples')

    cy.getDataTest('nav-link-component').click()
    cy.location('pathname').should('equal', '/component')

    cy.getDataTest('nav-link-best-practices').click()
    cy.location('pathname').should('equal', '/best-practices')
  })

  it.only('intercepting requests', () => {
    // cy.intercept('POST', 'http://localhost:3000/examples', {
    //   statusCode: 200,
    //   body: {
    //     name: "Using fixtures to represent data",
    //     message: 'successfully intercepted request'
    //   }
    // })
    cy.intercept('POST', 'http://localhost:3000/examples', {
      fixture: 'example.json'
    })
    cy.getDataTest('post-button').click()
    cy.getDataTest('post-response').should('contain.text', 'Using fixtures to represent data')
  })
})