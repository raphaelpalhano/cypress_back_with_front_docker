import { And, When } from '@badeball/cypress-cucumber-preprocessor';

When('faz o update do usuario valido', () => {
  cy.get('@id').then((id) => {
    cy.updateUser(id).then((res) => {
      cy.wrap(res).as('Response');
    });
  });
});

And('o usuario deve ter o displayname alterado', () => {
  cy.get('@id').then((id) => {
    cy.getUserId(id).then((res) => {
      expect(res.body.data.displayName).to.be.eq('Usuario Teste');
    });
  });
});
