import { BasePage } from '../BasePage';
import { LoginElement } from '../../components/LoginElement';

export class LoginPage extends BasePage {
  static acessarSauceDemo() {
    cy.visit('/');
  }

  static preencherCampos(userType) {
    super.typeValue(LoginElement.INPUT('username'), userType);
    super.typeValue(LoginElement.INPUT('password'), 'secret_sauce');
  }

  static clicarNoBotao() {
    super.clickOnElement(LoginElement.BUTTON('login-button'));
  }
}
