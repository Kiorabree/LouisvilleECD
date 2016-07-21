'use strict'

angular.module("dancersList", [])

.controller('mainCtrl', function($scope, dataService) {
    $scope.addDancer = function() {
      var dancer = {firstname: "name"};
      $scope.dancer.push(dancer);
    };

    dataService.getDancers(function(response) {
      console.log(response.data);
      $scope.dancers = response.data;
    });

})

.service('dataService', function ($http) {

  this.getDancers = function(callback) {
    $http.get('mock/dancers.json')
    .then(callback)
  };
  this.saveDancers = function(dancer) {
    console.log(dancer.username + "'s info was saved")
  };
});
