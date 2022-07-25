import { And, Given, When } from '@badeball/cypress-cucumber-preprocessor';
import faker from 'faker-br';

Given('a requisicao para buscar por todos usuarios', () => {
  cy.getAllUsers().then((res) => {
    cy.wrap(res).as('Response');
  });
});

And('deve retornar uma lista de usuarios maior que {int}', (usersQuantity) => {
  cy.get('@Response').then((res) => {
    expect(res.body.data.value.length).to.greaterThan(usersQuantity);
  });
});

When('a requisicao para buscar por um usuario valido', () => {
  cy.get('@Response').then((res) => {
    cy.wrap(res.body.data.value[0].id).as('id');
  });
  cy.get('@id').then((id) => {
    cy.getUserId(id).then((res) => {
      cy.wrap(res).as('Response');
    });
  });
});

Given('a requisicao para buscar por um usuario invalido', () => {
  cy.getUserId(faker.random.alphaNumeric()).then((res) => {
    cy.wrap(res).as('Response');
  });
});

And('deve retornar o id da requisicao', () => {
  cy.get('@id').then((id) => {
    cy.get('@Response').then((res) => {
      expect(res.body.data.id).to.be.eq(id);
    });
  });
});

And('deve retornar a mensagem de erro {string}', (erroMessage) => {
  cy.get('@Response').then((res) => {
    console.log(res.body.data.error.code);
    expect(res.body.data.error.code).to.be.eq(erroMessage);
  });
});
