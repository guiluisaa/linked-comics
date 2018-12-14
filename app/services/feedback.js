import Service from '@ember/service';
import { observer } from '@ember/object';
import { run } from '@ember/runloop';

export default Service.extend({

	show: false,
	color: null,
	message: null,

	hidde: observer('show', function () {

		if (this.get('show') == true) {

			run.later(() => {
        this._resetFeedback();
			}, 5000);
		}
  }),
  
	throwFeedback(color, message) {  

		this.set('show', true);
		this.set('color', color);
    this.set('message', message);
    
    run.later(() => {
      this.set('isActive', true);
    })
  },
  
	_resetFeedback() {
    this.set('isActive', false);

    this.set('show', false);
    this.set('color', null);
    this.set('message', null);
	}

});