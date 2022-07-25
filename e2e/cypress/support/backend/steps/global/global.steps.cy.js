import { And, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('o response deve ter o schema {string} com a requisicao {string}', (service, request) => {
  /**
   * PT-BR:
   * O parâmetro 'service' é o nome da pasta que armazena o arquivo json da requisição.
   * O parâmetro 'request' é o arquivo json da requisição.
   * Por exemplo: getUsers/getAllUsers.json =
   */

  cy.get('@Response').then((res) => {
    try {
      cy.contractValidation(res, service, request).then((validation) => {
        expect(validation).to.be.eq('Schema validado com sucesso.');
      });
    } catch (e) {
      console.log(e);
    }
  });
});

And('deve retornar o statuscode {int}', (statuscode) => {
  cy.get('@Response').then((res) => {
    expect(res.body.status).to.eq(statuscode);
  });
});
