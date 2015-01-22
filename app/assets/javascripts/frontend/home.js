
var YsApp = angular.module('yogicSadhana', ['ngRoute', 'snap']);

/* CONFIG */
YsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  //$locationProvider.html5Mode(true);
  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}]);

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

YsApp.controller('MainController', ['$scope', '$location', 'GetCourses', 'GetChapters', function($scope, $location, GetCourses, GetChapters){

  var path = $location.path();
  var course_id = path.match(/\/([^/]*)$/)[1];

  $scope.testmsg = "hello";
  $scope.path = $location.path();

  $scope.snap_opts = {
      disable: 'right'
  };

  GetCourses.get(function(data){
    $scope.courses = data.courses;
  });

  GetChapters.get(course_id, function(data){
    $scope.chapters = data.chapters;
  });

}]);


