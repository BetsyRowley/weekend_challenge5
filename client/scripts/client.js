var movieApp = angular.module('movieApp', []);

movieApp.controller('SearchController', ['$scope', 'BlockbusterService',
            function($scope, BlockbusterService) {
  console.log('SearchController called');

  var blockbusterService = BlockbusterService;

  $scope.movie = {
    title: '',
  };

  $scope.addMovie = blockbusterService.addMovie;

}]);

movieApp.controller('ResultsController', ['$scope', 'BlockbusterService',
            function($scope, BlockbusterService) {

  var blockbusterService = BlockbusterService;

  $scope.movieArray = blockbusterService.movieArray;
}]);

movieApp.factory('BlockbusterService', [function() {
  var movieArray = [];

  var addMovie = function(newMovie) {
    var copy = angular.copy(newMovie);
    movieArray.push(copy);
    console.log(movieArray);
  };

  return {
    movieArray : movieArray,
    addMovie : addMovie
  };
}]);
