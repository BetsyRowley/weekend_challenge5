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
  $scope.postMyDb = blockbusterService.postMyDb;
  $scope.addFavoriteMovie = blockbusterService.addFavoriteMovie;

}]); //End ResultsController

//FavoritesController
movieApp.controller('FavoritesController', ['$scope', 'BlockbusterService',
            function($scope, BlockbusterService) {

var blockbusterService = BlockbusterService;

$scope.favoriteMovies = blockbusterService.favoriteMovies;
$scope.getFavorites = blockbusterService.getFavorites;


}]); //End FavoritesController

//Factory
movieApp.factory('BlockbusterService', ['$http', function($http) {

  var omdbResults = {};
  var favoriteMovies = {};
  var postFavoriteMovie = {};
  var getFavorites = function() {
    $http.get('/favorites').then(function(response) {
        favoriteMovies.response = response;
        console.log('All favorites from mongo: ', favoriteMovies.response);
  });
};

  var postMyDb = function(newFavorite) {
    console.log(newFavorite);
    $http.post('/favorites', newFavorite).then(function(response) {
      postFavoriteMovie.response = response;
      console.log('Saved to personal db: ', postFavoriteMovie.response);
    });
    getFavorites();
  };

  var addFavoriteMovie = function(newMovie) {
    var copy = angular.copy(newMovie);
    console.log('copy from clicking favotite: ', copy);
    postMyDb(copy);
  };

  return {
    omdbResults : omdbResults,
    favoriteMovies : favoriteMovies,
    postFavoriteMovie: postFavoriteMovie,
    postMyDb : postMyDb,
    addFavoriteMovie : addFavoriteMovie,
    getFavorites : getFavorites,
    getOMDB : function(searchTitle) {
      var movie = angular.copy(searchTitle);
      console.log('Searched OMDB for: ', movie);
      $http.get('http://www.omdbapi.com/?t=' + movie +
                  '&y&plot=full&r=json').then(function(response) {
                          omdbResults.response = response;
                          console.log('OMDB results response: ', omdbResults.response);
      });
    }
  };
}]); //End Factory
