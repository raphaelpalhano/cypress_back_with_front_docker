import { Factory } from '../../../fixtures/Factory';
import { LoginLocator } from '../../locators/LoginLocators';
import { BasePage } from '../BasePage';

export class LoginHome extends BasePage {
  static goTo(endpoint) {
    cy.visit(endpoint);
  }

  static fillForm(option) {
    const data = Factory.getUserToLogin(option);
    super.typeValue(LoginLocator.INPUT('UserId'), data.user);
    super.typeValue(LoginLocator.INPUT('password'), data.password);
  }

  static makeLogin() {
    super.clickOnElement(LoginLocator.BUTTON('next'));
  }
}
