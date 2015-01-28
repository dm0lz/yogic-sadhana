
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
      $scope.i18n_translations = data.i18n_translations;
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


YsApp.controller('TheoryMediaController', ['$scope', '$stateParams', 'GetTheoryMedia', 'Seeker', '$controller',  function($scope, $stateParams, GetTheoryMedia, Seeker, $controller){
  $controller('BaseController', {$scope: $scope});

  var media_id = $stateParams.mediaId;
  GetTheoryMedia.get($scope.locale, media_id, function(data){
    $scope.media = data.media;
  });

  $scope.seekPercentage = Seeker.seekPercentage;

}]);


YsApp.controller('PracticeMediaController', ['$scope', '$stateParams', 'GetPracticeMedia', 'Seeker', '$controller', function($scope, $stateParams, GetPracticeMedia, Seeker, $controller){
  $controller('BaseController', {$scope: $scope});

  var media_id = $stateParams.mediaId;
  GetPracticeMedia.get($scope.locale, media_id, function(data){
    $scope.media = data.media;
  });

  $scope.seekPercentage = Seeker.seekPercentage;

}]);


