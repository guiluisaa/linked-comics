import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({

  items: null,
  isVisible: false,
  
  promocionalCode: 'comics10',
  hasPromotionalCode: false,
  
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
    
    return 0;
  }),
  
  discount: computed('subtotal', 'hasPromotionalCode', function() {
    if (this.hasPromotionalCode) {
      let discount = this.subtotal * 0.1;
      return Math.round(discount * 100) / 100;
    }

    return 0.0;
  }),
  
  total: computed('subtotal', 'discount', function () {
    let total = this.subtotal - this.discount;
    if(total <= 0) {
      return 0.0;
    }
    return (Math.round(total * 100) / 100);
  }),

  addItem(item) {
    if (!this.items.includes(item)) {      
      this.items.pushObject(item);
    }
  },

  removeItem(item) {
    this.items.removeObject(item);
  },

  applyPromotionalCode(code) {
    if(code.toLowerCase() == this.promocionalCode) {
      this.set('hasPromotionalCode', true);
    }
  },

  toggleCart() {
    this.toggleProperty('isVisible');
  },

  closeCart() {
    this.set('isVisible', false);
  },

  resetCart() {
    this.set('items', []);
    this.set('isVisible', false);
    this.set('hasPromotionalCode', false);
  }

});
