/// <reference types="cypress" />

import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  global.feature = window.testState.gherkinDocument.feature.name;
  cy.log(`Iniciando a feature ${global.feature}`);
});

After(() => {
  cy.log('Finish feature');
});
