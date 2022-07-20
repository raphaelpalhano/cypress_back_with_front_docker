Cypress.Commands.add('requestWithBody', (method, endpoint, body, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) => cy.request({
  method,
  url: endpoint,
  body,
  failOnStatusCode,
  timeout,
}));

Cypress.Commands.add('requestWithoutBody', (method, endpoint, failOnStatusCode = false, timeout = Cypress.env('global_timeout')) => cy.request({
  method,
  url: endpoint,
  failOnStatusCode,
  timeout,
}));
