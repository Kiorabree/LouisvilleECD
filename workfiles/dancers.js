angular.module("dancersApp", [])

  .controller('dancersList', function ($scope, dataService, $http) {
    $scope.addDancer = function() {
      $scope.dancers.push(this.dancer);
      $http.post('/dancers')
      }
    });

    dataService.getDancers(function(response) {
      console.log(response.data);
      $scope.dancers = response.data;
      return response.data;

    });

  })
  .service('dataService', function($http) {
    this.getDancers = function(callback) { $http.get('../mock/dancers.json').then(callback)
    }
  });
