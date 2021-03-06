var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Database module
var db = require('./modules/db.js');

//Route Modules
var favorites = require('./routes/favorites.js');

//App Config
app.set('port', (process.env.PORT || 8000));

//Middleware Conifg
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));


//Routes
app.use('/favorites', favorites);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});



//Listen
app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});
