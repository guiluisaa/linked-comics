import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  checkoutCart: service(),
  feedback: service(),

  actions: {
    addToCart() {
      this.get('checkoutCart').addItem(this.get('model'));
      this.transitionToRoute('checkout');

      this.feedback.throwFeedback('success', 'Comic added successfully');
    }
  }

});
