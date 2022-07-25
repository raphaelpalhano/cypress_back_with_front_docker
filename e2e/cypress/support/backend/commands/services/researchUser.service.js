/// <reference types="../../../" />

Cypress.Commands.add('getAllUsers', () => {
  cy.requestWithoutBody('GET', 'admin/users');
});

Cypress.Commands.add('getUserId', (id) => {
  cy.requestWithoutBody(`GET`, `/admin/user/${id}`);
});
