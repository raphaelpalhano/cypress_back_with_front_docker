import { But } from '@badeball/cypress-cucumber-preprocessor';

But('o usuario criado deve ser deletado', () => {
  cy.get('@id').then((id) => {
    console.log(id);
    cy.deleteUser(id).then((res) => {
      expect(res.body.status).to.be.eq(204);
      expect(res.body.data).to.be.eq('');
    });
  });
});
