import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({

  model() {

    return $.ajax('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=ac75869b0cff28a01af6bb94480dea66&hash=5b838e5aa74f1ef4a48741ab69dbfc7f&dateRange=2013-01-01,2013-01-02')
      .then(response => {
        let items = response.data.results;
        let random = Math.floor(Math.random() * 10) + 0;
        
        let comics = items.map(comic => {
          if ((comic.id % 10) == random) {
            comic.isRare = true;
          }
          return comic;
        })

        return comics;
      });
  }

});
