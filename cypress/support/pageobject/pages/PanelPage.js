import { PanelElement } from '../../components/PanelElement';
import { BasePage } from '../BasePage';

export class PanelPage extends BasePage {
  static filtrarProdutos(filtro) {
    super.waitElementAndSelectOption(PanelElement.SELECTFILTER(), filtro);
  }

  static verificarProduto(name, price) {
    super.validateFirstElementOfArray(PanelElement.ARRPRODUCTS(), name);
    super.validateFirstElementOfArray(PanelElement.ARRPRODUCTS(), price);
  }
}
