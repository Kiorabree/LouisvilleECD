angular.module("dancersApp", [])

  .controller('dancersList', function ($scope, dataService) {
    $scope.addDancer = function() {
      $scope.dancers.push(this.dancer);
      this.http.post('http://localhost:3000', JSON.stringify({'first': '1', 'last': '2', 'email': '3'}).{dancers: dancers});

    };

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
