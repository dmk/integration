Cypress.Commands.add('visitPeatio', () => {
  cy.visit(Cypress.env('peatioHost'))
})
