import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.log(`Iniciando a Feature ${window.testState.gherkinDocument.feature.name}`);
});
