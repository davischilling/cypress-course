describe('form tests', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  describe('header', () => {
    it('Contains correct header text', () => {
      cy.getDataTest('forms-header').should('contain.text', 'Testing Forms')
    })
  })

  describe('test subscribe form', () => {
    beforeEach(() => {
      cy.getDataTest('email-input-field').find('input').as('email-input')
    })

    it('should accept a valid email', () => {
      cy.get('@email-input').type('davi@gmail.com')
      cy.contains(/Successfully subbed: davi@gmail.com/).should('not.exist')
      cy.getDataTest('subscribe-button').click()
      cy.contains(/Successfully subbed: davi@gmail.com/).should('exist')
      cy.wait(3000)
      cy.contains(/Successfully subbed: davi@gmail.com/).should('not.exist')
    })

    it('should not accept an empty email', () => {
      cy.contains(/fail!/).should('not.exist')
      cy.getDataTest('subscribe-button').click()
      cy.contains(/fail!/).should('exist')
      cy.wait(3000)
      cy.contains(/fail!/).should('not.exist')
    })

    it('should not accept an invalid email', () => {
      cy.get('@email-input').type('davi@gmail.io')
      cy.contains(/Invalid email: davi@gmail.io!/).should('not.exist')
      cy.getDataTest('subscribe-button').click()
      cy.contains(/Invalid email: davi@gmail.io!/).should('exist')
      cy.wait(3000)
      cy.contains(/Invalid email: davi@gmail.io!/).should('not.exist')
    })
  })
})