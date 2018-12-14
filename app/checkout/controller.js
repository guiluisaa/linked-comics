import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  checkoutCart: service(),

  actions: {

    removeItem(item) {
      this.checkoutCart.removeItem(item);
      if(!this.checkoutCart.items.length) {
        this.transitionToRoute('index')
      }
    },

    applyPromotionalCode(code) {
      this.checkoutCart.applyPromotionalCode(code);
    }
  }
});
