/// <reference types="cypress" />

import { Before, After } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.log('Start feature');
});

After(() => {
  cy.visit('/signout');
  cy.log('Finish feature');
});
