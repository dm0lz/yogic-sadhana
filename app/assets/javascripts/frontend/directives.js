
YsApp.directive('navBack', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      element.bind('click', function(el){
        history.back();
      });
    }
  }
});

YsApp.directive('mediaElement', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      scope.$watch("media", function(mel){
        if (mel){
          angular.element(element).mediaelementplayer({
            // audioWidth: 900,
            success: function(mel){
              scope.mel = mel;
            }
          });
        }
      });
      // Alternative way
      // attrs.$observe('src', function(src) {
      //   angular.element(element).mediaelementplayer({
      //     audioWidth: 900,
      //     success: function(mel){
      //       scope.mel = mel;
      //     }
      //   });
      // });
    }

  }
});
