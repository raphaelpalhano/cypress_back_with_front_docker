import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('a requisicao para buscar por todos usuarios', () => {
  cy.getAllUsers().then((response) => {
    cy.wrap(response).as('Response');
  });
});
