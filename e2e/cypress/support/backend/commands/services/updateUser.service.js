/// <reference types="../../../" />

import { FactoryUsers } from '../../../../fixtures/backend/FactoryUsers';

Cypress.Commands.add('updateUser', (id) => {
  cy.requestWithBodyAndParamAndHeader('PATCH', 'admin/user', FactoryUsers.getUserUpdate(), id, { 'Content-Type': 'application/json' });
});
