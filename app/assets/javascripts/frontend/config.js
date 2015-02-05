
/* CONFIG AND Routing */
YsApp.config(['snapRemoteProvider', '$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider', function(snapRemoteProvider, $stateProvider, $urlRouterProvider, cfpLoadingBarProvider){
  cfpLoadingBarProvider.includeSpinner = false;
  snapRemoteProvider.globalOptions = {
    disable: 'right',
    tapToClose: false,
    maxPosition: 266,
    minPosition: -266,
    transitionSpeed: 0.4,
    hyperextensible: false
  };
  $urlRouterProvider.otherwise('/courses');
  $stateProvider

    .state('ys', {
      abstract: true,
      url: "/course",
      templateUrl: "/assets/frontend/partials/main.html",
      controller: 'CoursesController'
    })
    .state('ys.courses', {
      url: 's',
      views: {
        'main_content': {
          templateUrl: '/assets/frontend/partials/courses.html',
          controller: 'CoursesController'
        },
        'left_menu': {
          templateUrl: '/assets/frontend/partials/left.menu.html'
        }
      }
    })
    .state('ys.course', {
      url: '/:courseId',
      views: {
        'main_content': {
          templateUrl: '/assets/frontend/partials/course.html',
          controller: 'CourseController'
        },
        'left_menu': {
          templateUrl: '/assets/frontend/partials/left.menu.html'
        }
      }
    })
    .state('ys.course.chapters', {
      url: '/chapters',
      views: {
        'main_content@ys': {
          templateUrl: '/assets/frontend/partials/course.chapters.html',
          controller: 'ChaptersController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChaptersController'
        }
      }
    })
    .state('ys.course.chapter', {
      url: "/chapter/:chapterId",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.html",
          controller: 'ChapterController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChapterController'
        }
      }
    })
    .state('ys.course.chapter.theories', {
      url: "/theories",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.theories.html",
          controller: 'ChapterController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChapterController'
        }
      }
    })
    .state('ys.course.chapter.practices', {
      url: "/practices",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.practices.html",
          controller: 'ChapterController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.html',
          controller: 'ChapterController'
        }
      }
    })
    .state('ys.course.chapter.theory', {
      url: "/theory/:theoryId",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.theory.html",
          controller: 'TheoriesController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.2.html',
          controller: 'TheoriesController'
        }
      }
    })
    .state('ys.course.chapter.practice', {
      url: "/practice/:practiceId",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.practice.html",
          controller: 'PracticesController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.2.html',
          controller: 'PracticesController'
        }
      }
    })
    .state('ys.course.chapter.theory.medias', {
      url: "/medias",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.theory.medias.html",
          controller: 'TheoriesController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.2.html',
          controller: 'TheoriesController'
        }
      }
    })
    .state('ys.course.chapter.practice.medias', {
      url: "/medias",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.practice.medias.html",
          controller: 'PracticesController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.2.html',
          controller: 'PracticesController'
        }
      }
    })
    .state('ys.course.chapter.theory.media', {
      url: "/media/:mediaId",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.theory.media.html",
          controller: 'TheoryMediaController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.2.html',
          controller: 'TheoriesController'
        }
      }
    })
    .state('ys.course.chapter.practice.media', {
      url: "/media/:mediaId",
      views: {
        'main_content@ys': {
          templateUrl: "/assets/frontend/partials/course.chapter.practice.media.html",
          controller: 'PracticeMediaController'
        },
        'left_menu@ys': {
          templateUrl: '/assets/frontend/partials/left.menu.2.html',
          controller: 'PracticesController'
        }
      }
    })

    // .state('course', {
    //   abstract: true,
    //   url: "/chapter",
    //   templateUrl: "/assets/frontend/partials/main.html",
    //   controller: 'CoursesController'
    // })
    // .state('course.chapter.theories', {
    //   url: "/theories",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.theories.html",
    //       controller: 'ChaptersController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.html',
    //       controller: 'ChaptersController'
    //     }
    //   }
    // })
    // .state('course.chapter.practices', {
    //   url: "/practices",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.practices.html",
    //       controller: 'ChaptersController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.html',
    //       controller: 'ChaptersController'
    //     }
    //   }
    // })
    // .state('course.chapter.theory', {
    //   url: "/theory/:theoryId",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.theory.html",
    //       controller: 'TheoriesController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.2.html',
    //       controller: 'TheoriesController'
    //     }
    //   }
    // })
    // .state('course.chapter.practice', {
    //   url: "/practice/:practiceId",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.practice.html",
    //       controller: 'PracticesController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.2.html',
    //       controller: 'PracticesController'
    //     }
    //   }
    // })
    // .state('course.chapter.theory.medias', {
    //   url: "/medias",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.theory.medias.html",
    //       controller: 'TheoriesController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.2.html',
    //       controller: 'TheoriesController'
    //     }
    //   }
    // })
    // .state('course.chapter.practice.medias', {
    //   url: "/medias",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.practice.medias.html",
    //       controller: 'PracticesController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.2.html',
    //       controller: 'PracticesController'
    //     }
    //   }
    // })
    // .state('course.chapter.practice.media', {
    //   url: "/media/:mediaId",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.practice.media.html",
    //       controller: 'PracticeMediaController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.2.html',
    //       controller: 'PracticesController'
    //     }
    //   }
    // })
    // .state('course.chapter.theory.media', {
    //   url: "/media/:mediaId",
    //   views: {
    //     'main_content@course': {
    //       templateUrl: "/assets/frontend/partials/course.chapter.theory.media.html",
    //       controller: 'TheoryMediaController'
    //     },
    //     'left_menu@course': {
    //       templateUrl: '/assets/frontend/partials/left.menu.2.html',
    //       controller: 'TheoriesController'
    //     }
    //   }
    // });
}]);
