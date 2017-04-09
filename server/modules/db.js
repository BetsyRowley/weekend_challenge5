var mongoose = require('mongoose');
var mongoURI = 'mongodb://betsy:betsy@ds157390.mlab.com:57390/favorite_movies';
// 'mongodb://localhost:27017/favorites';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err) {
  console.log('Mongo Connection Error: ' + err);
});

MongoDB.once('open', function() {
  console.log('Connected to Mongo!');
});

module.exports = MongoDB;
