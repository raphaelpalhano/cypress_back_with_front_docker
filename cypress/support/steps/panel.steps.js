import { When } from 'cypress-cucumber-preprocessor/steps';
import { PanelPage } from '../pageobject/pages/PanelPage';

When('filtrar os produtos por {string}', (filtro) => {
  PanelPage.filtrarProdutos(filtro);
});

Then('deverá ser mostrado o primeiro produto com nome {string} e preço {string}', (productName, productPrice) => {
  PanelPage.verificarProduto(productName, productPrice);
});
