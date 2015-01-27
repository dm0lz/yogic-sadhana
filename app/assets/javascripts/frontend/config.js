
/* CONFIG AND Routing */
YsApp.config(['snapRemoteProvider', '$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider', function(snapRemoteProvider, $stateProvider, $urlRouterProvider, cfpLoadingBarProvider){
  cfpLoadingBarProvider.includeSpinner = false;
  snapRemoteProvider.globalOptions = {
    disable: 'right',
    maxPosition: 266,
    minPosition: -266,
    transitionSpeed: 0.3
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
