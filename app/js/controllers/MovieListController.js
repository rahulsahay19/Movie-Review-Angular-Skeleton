'use strict';

moviesApp.controller('MovieListController',
    function MovieListController($scope, $location, eventData) {
      $scope.events = eventData.getAllEvents();

      $scope.navigateToDetails = function (event) {
        $location.url('/event/' + event.id);
      };
    }
);