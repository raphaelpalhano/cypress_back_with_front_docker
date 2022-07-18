import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginHome } from '../pageobject/pages/LoginHome';

Given('que acesso o sistema de autenticacao', () => {
  LoginHome.goTo('/signin');
});

When(`efetuo login com CPF {string}`, (option) => {
  LoginHome.fillForm(option);
  LoginHome.makeLogin();
});

Then('devo ser autenticado', () => {
  LoginHome.authValidation();
});
