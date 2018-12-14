import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  checkoutCart: service(),

  beforeModel() {
    if (!this.checkoutCart.items.length) {
      this.transitionTo('index');
    }
  },

  model() {
    return this.checkoutCart.items;
  }
});
