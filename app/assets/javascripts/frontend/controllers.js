
/* CONTROLLERS */
YsApp.controller('BaseController', ['$scope', 'Locale', 'snapRemote', '$state', 'cfpLoadingBar', function($scope, Locale, snapRemote, $state, cfpLoadingBar){

  cfpLoadingBar.start();
  $scope.locale = Locale.getLocale();
  snapRemote.open('left');
  $scope.$state = $state;

}]);

YsApp.controller('CoursesController', ['$scope', 'Course', '$controller', function($scope, Course, $controller){
  $controller('BaseController', {$scope: $scope});

  $scope.$watch("course_id", function(){
    Course.get($scope.locale, $scope.course_id, function(data){
      $scope.chapters = data.chapters;
      $scope.i18n_translations = data.i18n_translations;
    });
  });

}]);

YsApp.controller('ChaptersController', ['$scope', 'Chapter', '$stateParams', '$controller', function($scope, Chapter, $stateParams, $controller){
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
    console.log(data.media);
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


