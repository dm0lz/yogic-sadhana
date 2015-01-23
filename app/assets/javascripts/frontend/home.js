
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
    .state('chapters', {
      url: '/chapters',
      templateUrl: '/assets/frontend/partials/chapters.html',
      controller: 'MainController'
    })
      .state('chapter_show', {
        url: "/chapters/:chapterId",
        templateUrl: "/assets/frontend/partials/chapter.show.html",
        controller: 'ChaptersController'
      })
        .state('practices', {
          url: "/chapter/:chapterId/practices",
          templateUrl: "/assets/frontend/partials/practices.html",
          controller: 'ChaptersController'
        })
          .state('practice_show', {
            url: "/chapter/:chapterId/practice/:practiceId",
            templateUrl: "/assets/frontend/partials/practice.show.html",
            controller: 'MediaController'
          })
        .state('theories', {
          url: "/chapter/:chapterId/theories",
          templateUrl: "/assets/frontend/partials/theories.html",
          controller: 'ChaptersController'
        })
          .state('theory_show', {
            url: "/chapter/:chapterId/theory/:theoryId",
            templateUrl: "/assets/frontend/partials/theory.show.html",
            controller: 'ChaptersController'
          })
    .state('state1', {
      url: "/state1",
      templateUrl: "/assets/frontend/partials/state1.html",
      controller: 'MainController'
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "/assets/frontend/partials/state2.html",
      controller: 'MainController'
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

YsApp.factory('GetTheoriesAndPractices', function($http){
  var GetTheoriesAndPractices = {};
  GetTheoriesAndPractices.get = function(chapter_id, callback){
    $http.get('/api/v1/chapters/' + chapter_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoriesAndPractices;
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


YsApp.controller('ChaptersController', ['$scope', 'GetChapters', 'GetTheoriesAndPractices', '$stateParams', function($scope, GetChapters, GetTheoriesAndPractices, $stateParams){

  $scope.init = function(course_id){
    GetChapters.get(course_id, function(data){
      $scope.chapters = data.chapters;
    });
  };

  var chapter_id = $stateParams.chapterId;
  $scope.chapter_id = chapter_id;

  GetTheoriesAndPractices.get(chapter_id, function(data){
    $scope.practices = data.practices;
    $scope.theories = data.theories;
  });

}]);



YsApp.controller('MediaController', ['$scope', '$stateParams', 'GetChapters', function($scope, $stateParams, GetChapters){

  // $scope.init = function(course_id){
  //   GetChapters.get(course_id, function(data){
  //     $scope.chapters = data.chapters;
  //   });
  // };
  //
  // GetCourses.get(function(data){
  //   $scope.courses = data.courses;
  // });
  console.log($stateParams);


}]);




