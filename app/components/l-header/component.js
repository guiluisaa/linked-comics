import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  checkoutCart: service(),
  showCheckoutCart: true,

  actions: {
    toggleCart() {
      this.checkoutCart.toggleCart();
    }
  }

});
