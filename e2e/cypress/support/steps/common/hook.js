/// <reference types="cypress" />

import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.log('Start feature');
});

After(() => {
  cy.log('Finish feature');
});
