/// <reference types="cypress" />

import { Before, After } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.log('Start feature');
  cy.visit('/signout');
});

After(() => {
  cy.log('Finish feature');
});
