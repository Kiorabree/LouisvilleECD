'use strict'

angular.module("dancersList", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.addDancer = function() {
    var dancer = [  {first: "First Name", last: "Last Name", username: "username", email: "email" } ];
  };

  $scope.helloWorld = dataService.helloWorld;

  dataService.getDancers(function(response) {
    console.log(response.data);
    $scope.dancers = response.data;
  });

  $scope.deleteDancer = function(dancer, $index) {
    dataService.deleteDancer(dancer);
    $scope.dancers.splice($index, 1);
  };

  $scope.saveDancer = function(dancer) {
    dataService.saveDancer(dancer);
  };
})

.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("Brrrrr");
  };
  this.getDancers = function(callback) {
    $http.get('mock/dancers.json')
    .then(callback)
  };
  this.deleteDancer = function(dancer) {
    console.log("Dancer" + dancer.username + "had been deleted")
  };
  this.saveDancer = function(dancer) {
    console.log("Dancer" + dancer.username + "had been added")
  };
});
