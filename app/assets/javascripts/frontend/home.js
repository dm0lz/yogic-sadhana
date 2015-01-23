
var YsApp = angular.module('yogicSadhana', ['ui.router', 'snap']);

/* CONFIG */
YsApp.config(['snapRemoteProvider', '$stateProvider', '$urlRouterProvider', function(snapRemoteProvider, $stateProvider, $urlRouterProvider){
  snapRemoteProvider.globalOptions = {
    disable: 'right',
    maxPosition: 266,
    minPosition: -266
  };
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state("contacts", {
      url: "/contacts",
      template: "<h1>My Contacts</h1>"
    })
    .state('state1', {
      url: "/state1",
      templateUrl: "/assets/frontend/partials/state1.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "/assets/frontend/partials/state2.html"
    });
}]);

/* FACTORIES */
YsApp.factory('GetCourses', function($http){
  var GetCourses = {};
  GetCourses.get = function(callback){
    $http.get('/api/v1/courses').success(function(data){
      callback(data);
    });
  };
  return GetCourses;
});

YsApp.factory('GetChapters', function($http){
  var GetChapters = {};
  GetChapters.get = function(course_id, callback){
    $http.get('/api/v1/courses/' + course_id).success(function(data){
      callback(data);
    });
  };
  return GetChapters;
});

/* CONTROLLERS */
YsApp.controller('MainController', ['$scope', 'GetCourses', 'GetChapters', function($scope, GetCourses, GetChapters){

  $scope.init = function(course_id){
    GetChapters.get(course_id, function(data){
      $scope.chapters = data.chapters;
    });
  };

  GetCourses.get(function(data){
    $scope.courses = data.courses;
  });


}]);


