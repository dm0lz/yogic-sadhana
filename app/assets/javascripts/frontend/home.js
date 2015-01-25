
var YsApp = angular.module('yogicSadhana', ['ui.router', 'snap']);

/* CONFIG AND Routing */
YsApp.config(['snapRemoteProvider', '$stateProvider', '$urlRouterProvider', function(snapRemoteProvider, $stateProvider, $urlRouterProvider){
  snapRemoteProvider.globalOptions = {
    disable: 'right',
    maxPosition: 266,
    minPosition: -266
  };
  $urlRouterProvider.otherwise('/chapters');
  $stateProvider
    .state('course', {
      abstract: true,
      url: "/chapters",
      templateUrl: "/assets/frontend/partials/main.html",
      controller: 'MainController'
    })
    .state('course.chapters', {
      url: '',
      views: {
        'main_content': {
          templateUrl: '/assets/frontend/partials/chapters.html',
        },
        'left_menu': {
          templateUrl: '/assets/frontend/partials/left_menu.html',
        }
      }
    })
    .state('course.chapter_show', {
      url: "/:chapterId",
      views: {
        'main_content': {
          templateUrl: "/assets/frontend/partials/chapter.show.html",
          controller: 'ChaptersController'
        },
        'left_menu': {
          templateUrl: '/assets/frontend/partials/left_menu.html',
          controller: 'ChaptersController'
        }
      }
    })
    .state('course.practices', {
      url: "/chapter/:chapterId/practices",
      templateUrl: "/assets/frontend/partials/practices.html",
      controller: 'ChaptersController'
    })
    .state('course.practice_show', {
      url: "/chapter/:chapterId/practice/:practiceId",
      templateUrl: "/assets/frontend/partials/practice.show.html",
      controller: 'PracticesController'
    })
    .state('course.theories', {
      url: "/chapter/:chapterId/theories",
      templateUrl: "/assets/frontend/partials/theories.html",
      controller: 'ChaptersController'
    })
    .state('course.theory_show', {
      url: "/chapter/:chapterId/theory/:theoryId",
      templateUrl: "/assets/frontend/partials/theory.show.html",
      controller: 'TheoriesController'
    });
}]);

/* FACTORIES */
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

YsApp.factory('GetPracticeMedias', function($http){
  var GetPracticeMedias = {};
  GetPracticeMedias.get = function(practice_id, callback){
    $http.get('/api/v1/practices/' + practice_id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedias;
});

YsApp.factory('GetTheoryMedias', function($http){
  var GetTheoryMedias = {};
  GetTheoryMedias.get = function(theory_id, callback){
    $http.get('/api/v1/theories/' + theory_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedias;
});

YsApp.factory('GetMenu', function($http){
  var GetMenu = {};
  GetMenu.get = function(course_id, callback){
    $http.get('/api/v1/courses/' + course_id + '/menu').success(function(data){
      callback(data);
    });
  };
  return GetMenu;
});

/* CONTROLLERS */
YsApp.controller('MainController', ['$scope', 'GetChapters', function($scope, GetChapters){

  // $scope.init = function(course_id){
  //   GetChapters.get(course_id, function(data){
  //     $scope.chapters = data.chapters;
  //   });
  // };
  $scope.$watch("course_id", function(){
    // console.log($scope.course_id);
    GetChapters.get($scope.course_id, function(data){
      // console.log(data);
      $scope.chapters = data.chapters;
    });
  });

}]);

YsApp.controller('ChaptersController', ['$scope', 'GetTheoriesAndPractices', '$stateParams', function($scope, GetTheoriesAndPractices, $stateParams){

  var chapter_id = $stateParams.chapterId;
  $scope.chapter_id = chapter_id;
  GetTheoriesAndPractices.get(chapter_id, function(data){
    $scope.practices = data.practices;
    $scope.theories = data.theories;
  });

}]);

YsApp.controller('PracticesController', ['$scope', '$stateParams', 'GetPracticeMedias', function($scope, $stateParams, GetPracticeMedias){

  var practice_id = $stateParams.practiceId;
  GetPracticeMedias.get(practice_id, function(data){
    $scope.practice = data.practice;
    $scope.medias = data.medias;
  });

}]);

YsApp.controller('TheoriesController', ['$scope', '$stateParams', 'GetTheoryMedias', function($scope, $stateParams, GetTheoryMedias){

  var theory_id = $stateParams.theoryId;
  GetTheoryMedias.get(theory_id, function(data){
    $scope.theory = data.theory;
    $scope.medias = data.medias;
  });

}]);


YsApp.controller('MenuController', ['$scope', '$stateParams', 'GetMenu', function($scope, $stateParams, GetMenu){

  $scope.$watch("course_id", function(){
    // console.log($scope.course_id);
    GetMenu.get($scope.course_id, function(data){
      // console.log(data);
      $scope.chapters = data.chapters;
    });
  });

}]);



