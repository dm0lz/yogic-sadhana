
YsApp.directive('mediaElement', function(){
  return {
    restrict: 'A',
    //scope: true,
    link: function(scope, element, attrs){

      // attrs.$observe('src', function(src) {
      //   angular.element(element).mediaelementplayer({
      //     audioWidth: 900,
      //     success: function(mel){
      //       scope.mel = mel;
      //     }
      //   });
      // });

      // Alternative way using scope.$watch
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

    }

  }
});
