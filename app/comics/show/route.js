import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({

  model(params) {

    return $.ajax(`http://gateway.marvel.com/v1/public/comics/${params.comic_id}?ts=1&apikey=ac75869b0cff28a01af6bb94480dea66&hash=5b838e5aa74f1ef4a48741ab69dbfc7f&dateRange=2013-01-01,2013-01-02`)
      .then(response => {
        let comic =  response.data.results[0];
        let random = Math.floor(Math.random() * 10) + 0;

        if ((comic.id % 10) == random) {
          comic.isRare = true;
        }
        return comic;
      });
  }

});
