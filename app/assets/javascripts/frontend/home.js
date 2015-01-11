
var YsApp = angular.module('yogicSadhana', ['ngRoute']);

/* CONFIG */
YsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  //$locationProvider.html5Mode(true);
  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}]);


YsApp.controller('MainController', ['$scope', '$location', function($scope, $location){

  $scope.testmsg = "hello";
  $scope.path = $location.path();

}]);
