'use strict';

moviesApp.controller('MovieListController',
    function MovieListController($scope, $location, showData) {
      $scope.shows = showData.getAllEvents();

      $scope.navigateToDetails = function (show) {
        $location.url('/show/' + show.id);
      };
    }
);