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

//POST new favorite
router.post('/', function(req, res) {
  var favorite = new Favorites();
  favorite.title = req.body.title;
  favorite.actors = req.body.actors;
  favorite.awards = req.body.awards;
  favorite.boxoffice = req.body.boxoffice;
  favorite.director = req.body.director;
  favorite.genre = req.body.genre;
  favorite.plot = req.body.plot;
  favorite.rated = req.body.rated;
  favorite.runtime = req.body.runtime;
  favorite.year = req.body.year;
  favorite.poster = req.body.poster;
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
