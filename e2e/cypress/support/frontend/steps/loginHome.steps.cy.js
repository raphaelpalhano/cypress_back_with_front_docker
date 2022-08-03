import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginHome } from '../pageobject/pages/LoginHome';

Given('que acesso o sistema de autenticacao', () => {
  LoginHome.goTo('/signin');
});

When(`efetuo login valido com {string}`, (option) => {
  LoginHome.fillForm(option);
  LoginHome.makeLogin();
});

When(`efetuo login invalido com {string}`, (option) => {
  LoginHome.fillForm(option);
  LoginHome.makeInvalidLogin();
});

Then('devo ser autenticado', () => {
  LoginHome.authValidation();
});

Then('devo visualizar a mensagem {string}', (message) => {
  LoginHome.getMessage(message).then((errorText) => {
    expect(errorText).to.be.eq(message);
  });
});

Then('devo visualizar a mensagem generica {string}', (message) => {
  LoginHome.getGenericMessage(message).then((errorText) => {
    expect(errorText).to.be.eq(message);
  });
});
