
var YsApp = angular.module('yogicSadhana', ['ui.router', 'snap', 'angular-loading-bar', 'ngAnimate']);

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
      url: "/chapter",
      templateUrl: "/assets/frontend/partials/main.html",
      controller: 'MainController'
    })
    .state('course.chapters', {
      url: 's',
      views: {
        'main_content': {
          templateUrl: '/assets/frontend/partials/chapter.chapters.html',
        },
        'left_menu': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
        }
      }
    })
    .state('course.chapter', {
      url: "/:chapterId",
      views: {
        'main_content': {
          templateUrl: "/assets/frontend/partials/chapter.chapter.html",
          controller: 'ChaptersController'
        },
        'left_menu': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChaptersController'
        }
      }
    })
    .state('course.chapter.theories', {
      url: "/theories",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.theories.html",
          controller: 'ChaptersController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChaptersController'
        }
      }
    })
    .state('course.chapter.practices', {
      url: "/practices",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.practices.html",
          controller: 'ChaptersController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChaptersController'
        }
      }
    })
    .state('course.chapter.theory', {
      url: "/theory/:theoryId",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.theory.html",
          controller: 'TheoriesController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'TheoriesController'
        }
      }
    })
    .state('course.chapter.practice', {
      url: "/practice/:practiceId",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.practice.html",
          controller: 'PracticesController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'PracticesController'
        }
      }
    })
    .state('course.chapter.theory.medias', {
      url: "/medias",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.theory.medias.html",
          controller: 'TheoriesController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'TheoriesController'
        }
      }
    })
    .state('course.chapter.practice.medias', {
      url: "/medias",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.practice.medias.html",
          controller: 'PracticesController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'PracticesController'
        }
      }
    })
    .state('course.chapter.practice.media', {
      url: "/media/:mediaId",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.practice.media.html",
          controller: 'PracticeMediaController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'PracticesController'
        }
      }
    })
    .state('course.chapter.theory.media', {
      url: "/media/:mediaId",
      views: {
        'main_content@course': {
          templateUrl: "/assets/frontend/partials/chapter.theory.media.html",
          controller: 'TheoryMediaController'
        },
        'left_menu@course': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'TheoriesController'
        }
      }
    });
}]);

/* FACTORIES */
YsApp.factory('GetChapters', function($http){
  var GetChapters = {};
  GetChapters.get = function(locale, course_id, callback){
    $http.get('/' + locale + '/api/v1/courses/' + course_id).success(function(data){
      callback(data);
    });
  };
  return GetChapters;
});

YsApp.factory('GetTheoriesAndPractices', function($http){
  var GetTheoriesAndPractices = {};
  GetTheoriesAndPractices.get = function(locale, chapter_id, callback){
    $http.get('/' + locale + '/api/v1/chapters/' + chapter_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoriesAndPractices;
});

YsApp.factory('GetPracticeMedias', function($http){
  var GetPracticeMedias = {};
  GetPracticeMedias.get = function(locale, practice_id, callback){
    $http.get('/' + locale + '/api/v1/practices/' + practice_id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedias;
});

YsApp.factory('GetTheoryMedias', function($http){
  var GetTheoryMedias = {};
  GetTheoryMedias.get = function(locale, theory_id, callback){
    $http.get('/' + locale + '/api/v1/theories/' + theory_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedias;
});

YsApp.factory('GetTheoryMedia', function($http){
  var GetTheoryMedia = {};
  GetTheoryMedia.get = function(locale, media_id, callback){
    $http.get('/' + locale + '/api/v1/medias/' + media_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedia;
});

YsApp.factory('GetPracticeMedia', function($http){
  var GetPracticeMedia = {};
  GetPracticeMedia.get = function(locale, media_id, callback){
    $http.get('/' + locale + '/api/v1/medias/' + media_id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedia;
});

YsApp.factory('Locale', function($location){
  var Locale = {};
  Locale.getLocale = function(){
    var url = $location.$$absUrl;
    var locale = url.split("/")[3];
    return locale;
  };
  return Locale;
});

/* CONTROLLERS */
YsApp.controller('BaseController', ['$scope', 'Locale', 'snapRemote', '$state', 'cfpLoadingBar', function($scope, Locale, snapRemote, $state, cfpLoadingBar){
  cfpLoadingBar.start();
  $scope.locale = Locale.getLocale();
  snapRemote.open('left');
  $scope.$state = $state;
}]);

YsApp.controller('MainController', ['$scope', 'GetChapters', '$controller', function($scope, GetChapters, $controller){
  $controller('BaseController', {$scope: $scope});

  $scope.$watch("course_id", function(){
    GetChapters.get($scope.locale, $scope.course_id, function(data){
      $scope.chapters = data.chapters;
    });
  });

}]);

YsApp.controller('ChaptersController', ['$scope', 'GetTheoriesAndPractices', '$stateParams', '$controller', function($scope, GetTheoriesAndPractices, $stateParams, $controller){
  $controller('BaseController', {$scope: $scope});

  var chapter_id = $stateParams.chapterId;
  GetTheoriesAndPractices.get($scope.locale, chapter_id, function(data){
    $scope.chapter = data.chapter;
    $scope.practices = data.practices;
    $scope.theories = data.theories;
  });

}]);

YsApp.controller('PracticesController', ['$scope', '$stateParams', 'GetPracticeMedias', '$controller', function($scope, $stateParams, GetPracticeMedias, $controller){
  $controller('BaseController', {$scope: $scope});

  var practice_id = $stateParams.practiceId;
  GetPracticeMedias.get($scope.locale, practice_id, function(data){
    $scope.practice = data.practice;
    $scope.practices = data.practices;
    $scope.medias = data.medias;
  });

}]);

YsApp.controller('TheoriesController', ['$scope', '$stateParams', 'GetTheoryMedias', '$controller', function($scope, $stateParams, GetTheoryMedias, $controller){
  $controller('BaseController', {$scope: $scope});

  var theory_id = $stateParams.theoryId;
  GetTheoryMedias.get($scope.locale, theory_id, function(data){
    $scope.theories = data.theories;
    $scope.theory = data.theory;
    $scope.medias = data.medias;
  });

}]);

YsApp.controller('TheoryMediaController', ['$scope', '$stateParams', 'GetTheoryMedia', '$controller', function($scope, $stateParams, GetTheoryMedia, $controller){
  $controller('BaseController', {$scope: $scope});

  var media_id = $stateParams.mediaId;
  GetTheoryMedia.get($scope.locale, media_id, function(data){
    $scope.media = data.media;
  });

}]);

YsApp.controller('PracticeMediaController', ['$scope', '$stateParams', 'GetPracticeMedia', '$controller', function($scope, $stateParams, GetPracticeMedia, $controller){
  $controller('BaseController', {$scope: $scope});

  var media_id = $stateParams.mediaId;
  GetPracticeMedia.get($scope.locale, media_id, function(data){
    $scope.media = data.media;
  });

}]);



