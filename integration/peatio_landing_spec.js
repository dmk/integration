describe('Peatio login', function () {
  it('Visits the landing page', function () {
    cy.visitPeatio()
    cy.wait(1000, { log: false })

    cy.contains('Sign In').click()

    cy.location('host').should('eq', 'auth.wb3.helioscloud.com')

    cy.wait(1000, { log: false })
    cy.get('#account_email').type('admin@barong.io')
    cy.wait(500, { log: false })
    cy.contains('Submit').click()

    cy.wait(1000, { log: false })
    cy.get('#account_password').type('Qwerty123')
    cy.wait(500, { log: false })
    cy.contains('Submit').click()

    cy.wait(1000, { log: false })
    cy.location('host').should('eq', Cypress.env('peatioHost'))
  })
})
