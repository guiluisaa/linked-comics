import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object";

export default Component.extend({

  router: service(),

  checkoutCart: service(),
  items: computed.alias('checkoutCart.items'),

  actions: {

    toCheckout() {
      this.checkoutCart.closeCart();
      this.router.transitionTo('checkout');
    },

    removeItem(item) {
      this.checkoutCart.removeItem(item);
    }
  }

});
