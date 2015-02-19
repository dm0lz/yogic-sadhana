
/* CONTROLLERS */
YsApp.controller('BaseController', ['$scope', '$rootScope', 'Locale', 'snapRemote', '$state', 'cfpLoadingBar', '$detection', '$auth', '$location', function($scope, $rootScope, Locale, snapRemote, $state, cfpLoadingBar, $detection, $auth, $location){

  cfpLoadingBar.start();
  $scope.locale = Locale.getLocale();
  $scope.$state = $state;

  if (!$detection.isAndroid() && !$detection.isiOS() && !$detection.isWindowsPhone()){
    snapRemote.open('left');
  }

  snapRemote.getSnapper().then(function(snapper) {
    snapper.on('open', function() {
      var element = angular.element(".snapjs_content");
       $(element).css({ "padding-right": "266px" });
    });
    snapper.on('close', function() {
      var element = angular.element(".snapjs_content");
      $(element).css({ "padding-right": "0px" });
    });
    // snapper.on('animated', function(side) {
    //   var element = angular.element(".snapjs_content");
    //   if(snapper.state().state == "closed"){
    //     $(element).css({ "padding-right": "0px" });
    //   }else{
    //     $(element).css({ "padding-right": "266px" });
    //   }
    // });
  });

  $scope.apply_media_class = function(media){
    if (media.video.url !== null){
      return "fa fa-film"
    }
    if (media.audio.url !== null){
      return "fa fa-music"
    }
  };

  $scope.signOut = function() {
    $auth.signOut();
    // .then(function(resp) {
    //   $location.path('/sign_in');
    // })
    // .catch(function(resp) {
    //   $location.path('/sign_in');
    // });
  };

  $rootScope.$on('auth:logout-success', function(ev) {
    console.log('auth:logout-success');
    $location.path('/sign_in');
  });
  $rootScope.$on('auth:validation-error', function(ev) {
    console.log('auth:validation-error');
    $location.path('/sign_in');
  });
  $rootScope.$on('auth:login-success', function() {
    console.log('auth:login-success');
    $location.path('/courses');
  });
  // $rootScope.$on('auth:validation-success', function() {
  //   $location.path('/courses');
  // });

  // console.log(JSON.stringify($auth));

}]);

YsApp.controller('CoursesController', ['$scope', 'Course', 'Courses', '$controller', '$auth', function($scope, Course, Courses, $controller, $auth){
  $controller('BaseController', {$scope: $scope});

  // $scope.$watch("course_id", function(){
  //   Course.get($scope.locale, $scope.course_id, function(data){
  //     $scope.chapters = data.chapters;
  //   });
  // });

  Courses.get($scope.locale, function(data){
    $scope.courses = data.courses;
    $scope.i18n_translations = data.i18n_translations;
    console.log(JSON.stringify(data.courses));
  });


}]);

YsApp.controller('LoginController', ['$scope', '$rootScope', '$state', '$auth', '$controller', '$location', 'cfpLoadingBar', function($scope, $rootScope, $state, $auth, $controller, $location, cfpLoadingBar){
  $controller('BaseController', {$scope: $scope});

  $scope.submitLogin = function() {
    $auth.submitLogin($scope.loginForm)
    .then(function(resp) {
      $auth.authenticate('email')
    })
    .catch(function(resp) {
      console.log(resp);
    });
  };

  var userCheck = $auth.validateUser();
  if(userCheck.$$state.status == 1){
    $location.path('/courses');
  };

  cfpLoadingBar.complete();

}]);

YsApp.controller('RegistrationController', ['$scope', '$rootScope', '$state', '$auth', '$controller', '$location', 'cfpLoadingBar', function($scope, $rootScope, $state, $auth, $controller, $location, cfpLoadingBar){
  $controller('BaseController', {$scope: $scope});

  $scope.submitRegistration = function() {
    $auth.submitRegistration($scope.registrationForm)
    .then(function(resp) {
      $location.path('/sign_in');
    })
    .catch(function(resp) {
      console.log(resp);
    });
  };

  var userCheck = $auth.validateUser();
  if(userCheck.$$state.status == 1){
    $location.path('/courses');
  };

  cfpLoadingBar.complete();

}]);

YsApp.controller('CourseController', ['$scope', '$stateParams', 'Course', '$controller', function($scope, $stateParams, Course, $controller){
  $controller('BaseController', {$scope: $scope});

  var course_id = $stateParams.courseId;
  Course.get($scope.locale, course_id, function(data){
    $scope.course = data.course;
    $scope.chapters = data.chapters;
    $scope.i18n_translations = data.i18n_translations;
  });

}]);

YsApp.controller('ChaptersController', ['$scope', 'snapRemote', 'Course', '$stateParams', '$controller', function($scope, snapRemote, Course, $stateParams, $controller){
  $controller('BaseController', {$scope: $scope});

  // snapRemote.open('left');

  var course_id = $stateParams.courseId;
  Course.get($scope.locale, course_id, function(data){
    $scope.course = data.course;
    $scope.chapters = data.chapters;
    $scope.i18n_translations = data.i18n_translations;
  });

}]);

YsApp.controller('ChapterController', ['$scope', 'Chapter', '$stateParams', '$controller', function($scope, Chapter, $stateParams, $controller){
  $controller('BaseController', {$scope: $scope});

  var chapter_id = $stateParams.chapterId;
  Chapter.get($scope.locale, chapter_id, function(data){
    $scope.chapter = data.chapter;
    $scope.theories = data.theories;
    $scope.practices = data.practices;
  });

  // Chapter.get($scope.locale, chapter_id, function(data){
    //console.log(data);
    // $scope.practices = [];
    // $scope.theories = [];
    // angular.forEach(data.theories, function(data){
    //   var theory = {};
    //   theory.theory = data.theory;
    //   theory.medias = data.medias;
    //   $scope.theories.push(theory);
    // });
    // angular.forEach(data.practices, function(data){
    //   var practice = {};
    //   practice.practice = data.practice;
    //   practice.medias = data.medias;
    //   $scope.practices.push(practice);
    // });
    // $scope.chapter = data.chapter;
  // });

}]);

YsApp.controller('PracticesController', ['$scope', '$stateParams', 'Practice', '$controller', function($scope, $stateParams, Practice, $controller){
  $controller('BaseController', {$scope: $scope});

  var practice_id = $stateParams.practiceId;
  Practice.get($scope.locale, practice_id, function(data){
    $scope.practice = data.practice;
    $scope.practices = data.practices;
    $scope.medias = data.medias;
  });

}]);

YsApp.controller('TheoriesController', ['$scope', '$stateParams', 'Theory', '$controller', function($scope, $stateParams, Theory, $controller){
  $controller('BaseController', {$scope: $scope});

  var theory_id = $stateParams.theoryId;
  Theory.get($scope.locale, theory_id, function(data){
    $scope.theories = data.theories;
    $scope.theory = data.theory;
    $scope.medias = data.medias;
  });

}]);


YsApp.controller('TheoryMediaController', ['$scope', '$stateParams', 'GetTheoryMedia', '$controller',  function($scope, $stateParams, GetTheoryMedia, $controller){
  $controller('BaseController', {$scope: $scope});

  var media_id = $stateParams.mediaId;
  GetTheoryMedia.get($scope.locale, media_id, function(data){
    $scope.media = data.media;
    // console.log(data.media);
  });

  // $scope.$watch("mel", function(mel){
  //   if (mel){
  //     console.log(mel);
  //     mel.load();
  //   }
  // });

  // $scope.seekPercentage = Seeker.seekPercentage;

}]);


YsApp.controller('PracticeMediaController', ['$scope', '$stateParams', 'GetPracticeMedia', '$controller', function($scope, $stateParams, GetPracticeMedia, $controller){
  $controller('BaseController', {$scope: $scope});

  var media_id = $stateParams.mediaId;
  GetPracticeMedia.get($scope.locale, media_id, function(data){
    $scope.media = data.media;
  });

  // $scope.seekPercentage = Seeker.seekPercentage;

}]);


