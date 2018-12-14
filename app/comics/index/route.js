import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({

  model() {

    return $.ajax('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ac75869b0cff28a01af6bb94480dea66&hash=5b838e5aa74f1ef4a48741ab69dbfc7f')
      .then(response => {
        return response.data.results;
      });
  }

});