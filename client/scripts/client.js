var movieApp = angular.module('movieApp', []);

//SearchController
movieApp.controller('SearchController', ['$scope', 'BlockbusterService',
            function($scope, BlockbusterService) {
  console.log('SearchController called');

  var blockbusterService = BlockbusterService;

  $scope.title = '';

  $scope.getOMDB = blockbusterService.getOMDB;

}]); //end SearchController

//ResultsController
movieApp.controller('ResultsController', ['$scope', 'BlockbusterService',
            function($scope, BlockbusterService) {

  var blockbusterService = BlockbusterService;

  $scope.omdbResults = blockbusterService.omdbResults;
  // $scope.postMyDb = blockbusterService.postMyDb;
  // $scope.addFavoriteMovie = blockbusterService.addFavoriteMovie;

}]); //End ResultsController

//FavoritesController
movieApp.controller('FavoritesController', ['$scope', 'BlockbusterService',
            function($scope, BlockbusterService) {

var blockbusterService = BlockbusterService;

// $scope.favoritesArray = blockbusterService.favoritesArray;
$scope.favoriteMovies = blockbusterService.favoriteMovies;
$scope.getFavorites = blockbusterService.getFavorites;

}]); //End FavoritesController

//Factory
movieApp.factory('BlockbusterService', ['$http', function($http) {

  var omdbResults = {};
  var favoriteMovies = {};

  // var favoritesArray = [];
  //
  // var postMyDb = function(newFavorite) {
  //   $http.post('/favorites').then(function(successCallback) {
  //     console.log('Saved to personal db: ' + newFavorite);
  //   });
  // };
  //
  // var addFavoriteMovie = function(newMovie) {
  //   var copy = angular.copy(newMovie);
  //   favoritesArray.push(copy);
  //   console.log('Sent to favoritesArray on the DOM: ', favoritesArray);
  //   postMyDb(copy.data);
  // };

  return {
    // favoritesArray : favoritesArray,
    // addFavoriteMovie : addFavoriteMovie,
    omdbResults : omdbResults,
    favoriteMovies : favoriteMovies,
    // postMyDb : postMyDb,
    getOMDB : function(searchTitle) {
      var movie = angular.copy(searchTitle);
      console.log('Searched OMDB for: ', movie);
      $http.get('http://www.omdbapi.com/?t=' + movie +
                  '&y&plot=full&r=json').then(function(response) {
                          omdbResults.response = response;
                          console.log('OMDB results response: ', omdbResults.response);
      });
    },
    getFavorites : function() {
      $http.get('/favorites').then(function(response) {
          favoriteMovies.response = response;
          console.log(favoriteMovies.response);

      });
    }
  };
}]); //End Factory
