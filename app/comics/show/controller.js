import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  checkoutCart: service(),

  actions: {
    addToCart() {
      this.get('checkoutCart').addItem(this.get('model'));
      this.transitionToRoute('checkout');
    }
  }

});
