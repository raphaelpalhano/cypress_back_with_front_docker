/// <reference types="cypress" />

import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.log(`Iniciando a feature ${window.testState.gherkinDocument.feature.name}`);
});

After(() => {
  cy.log('Finalizando a feature');
});
