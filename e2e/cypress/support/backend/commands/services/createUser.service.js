/// <reference types="../../../" />

import { FactoryUsers } from '../../../../fixtures/backend/FactoryUsers';

Cypress.Commands.add('createUser', (type) => {
  cy.requestWithBodyAndHeader('POST', 'admin/users', FactoryUsers.getUser(type), { 'Content-Type': 'application/json' });
});
