var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var FavoritesSchema = mongoose.Schema({
  title: String,
  actors: String,
  awards: String,
  boxoffice: String,
  director: String,
  genre: String,
  plot: String,
  rated: String,
  runtime: String,
  year: String,
  poster: String
});

var Favorites = mongoose.model('Favorites', FavoritesSchema, 'favorites');

//GET all favorites
router.get('/', function(req, res) {
  Favorites.find(function(err, allFavorites) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(allFavorites);
    }
  });
});

//POST new favorite
router.post('/', function(req, res) {
  console.log('Data received from server: ', req.body.data);
  var favorite = new Favorites();
  favorite.title = req.body.data.Title;
  favorite.actors = req.body.data.Actors;
  favorite.awards = req.body.data.Awards;
  favorite.boxoffice = req.body.data.BoxOffice;
  favorite.director = req.body.data.Director;
  favorite.genre = req.body.data.Genre;
  favorite.plot = req.body.data.Plot;
  favorite.rated = req.body.data.Rated;
  favorite.runtime = req.body.data.Runtime;
  favorite.year = req.body.data.Year;
  favorite.poster = req.body.data.Poster;
  favorite.save(function(err, savedFavorite) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(savedFavorite);
    }
  });
});

module.exports = router;
