import { And, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('a requisicao para criar um usuario {string}', (option) => {
  cy.createUser(option).then((res) => {
    cy.wrap(res).as('Response');
    if (res.body.data.id) {
      console.log(res.body);
      cy.wrap(res.body.data.id).as('id');
    }
  });
});

And('deve retornar o id do usuario', () => {
  cy.get('@Response').then((res) => {
    expect(res.body.data).have.property('id');
  });
});
