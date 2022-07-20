/// <reference types="../../../" />

Cypress.Commands.add('getAllUsers', () => {
  cy.requestWithoutBody('GET', 'admin/users');
});
