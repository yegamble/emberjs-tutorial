import Controller from '@ember/controller';

export default class CartController extends Controller {
  subtotal = 0;

  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    });
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
