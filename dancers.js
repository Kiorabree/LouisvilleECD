angular.module("dancersApp", [])

  .controller('dancersList', function ($scope, dataService) {
    $scope.addDancer = function() {
      var dancer = {name: " "};
      $scope.dancers.push(dancer);
    };

    dataService.getDancers(function(response) {
      console.log(response.data);
      return response.data;
      $scope.dancers = response.data;
    });

  })
  .service('dataService', function($http) {
    this.checkService = function () {
      console.log("Checking the service?");
    };

    this.getDancers = function(callback) { $http.get('mock/dancers.json').then(callback)
    }
  });
