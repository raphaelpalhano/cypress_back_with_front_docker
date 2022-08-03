import { Factory } from '../../../../fixtures/frontend/Factory';
import { LoginLocator } from '../../locators/LoginLocators';
import { BasePage } from '../BasePage';

export class LoginHome extends BasePage {
  static goTo(endpoint) {
    cy.visit(endpoint);
    super.getElement(LoginLocator.INPUT('UserId')).should('be.visible');
  }

  static fillForm(option) {
    const data = Factory.getUserToLogin(option);
    super.typeValue(LoginLocator.INPUT('UserId'), data.user);
    super.typeValue(LoginLocator.INPUT('password'), data.password);
  }

  static makeLogin() {
    super.clickOnElement(LoginLocator.BUTTON('next')).then(() => {
      super
        .getElement(LoginLocator.PRETEXT())
        .request('/signin')
        .then((response) => {
          cy.wrap(response).as('response');
        });
    });
  }

  static makeInvalidLogin() {
    super.clickOnElement(LoginLocator.BUTTON('next'));
  }

  static authValidation() {
    cy.get('@response').then((response) => {
      expect(response.body.isAuthenticated).equal(true);
    });
  }

  static getMessage(text) {
    return super.getElementByXPath(LoginLocator.MESSAGE(text)).invoke('text');
  }

  static getGenericMessage(text) {
    return super.getElementByXPath(LoginLocator.GENERICMESSAGE(text)).invoke('text');
  }
}
