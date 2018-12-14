import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({

  items: null,
  isVisible: false,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  subtotal: computed('items', 'items.@each.prices', function() {
    let items = this.items;

    if (items.get('length') > 0) {      
      let total = items.map(item => item.prices[0].price).reduce((acc, price) => acc + price);
      return Math.round(total * 100) / 100;
    }
    
    return '0.00';
  }),

  addItem(item) {
    if (!this.items.includes(item)) {      
      this.items.pushObject(item);
    }
  },

  removeItem(item) {
    this.items.removeObject(item);
  },

  toggleCart() {
    this.toggleProperty('isVisible');
  },

  closeCart() {
    this.set('isVisible', false);
  }

});
