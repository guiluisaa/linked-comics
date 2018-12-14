import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  checkoutCart: service(),
  feedback: service(),

  actions: {

    removeItem(item) {
      this.checkoutCart.removeItem(item);
      if(!this.checkoutCart.items.length) {
        this.transitionToRoute('index')
      }
    },

    applyPromotionalCode(code) {
      this.checkoutCart.applyPromotionalCode(code);
    },

    finalizeOrder() {      
      this.feedback.throwFeedback('success', 'Successful Purchase');
      this.checkoutCart.resetCart();
      this.transitionToRoute('index');
    }
  }
});
