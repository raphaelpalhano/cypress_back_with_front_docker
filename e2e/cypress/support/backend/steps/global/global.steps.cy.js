import { And, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('o response deve ter o schema {string} com a requisicao {string}', (service, request) => {
  /**
   * PT-BR:
   * O parâmetro 'status' é o nome do arquivo json que armazena o schema da requisição.
   * O parâmetro 'schema' é a pasta onde deve ser armazenado o schema.
   * Por exemplo: schema/status == get-user/200.json || post-user/400.json
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

And('deve retornar o statuscode {int}', () => {
  cy.get('@Response').then((res) => {
    expect(res.status).to.eq(200);
  });
});
