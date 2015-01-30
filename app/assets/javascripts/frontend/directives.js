
YsApp.directive('mediaElement', function(){
  return {
    restrict: 'A',
    //scope: true,
    link: function(scope, element, attrs){

      // scope.mep = angular.element(element).mediaelementplayer(scope.$eval(attrs.mediaElementOptions));
      attrs.$observe('src', function(src) {
        angular.element(element).mediaelementplayer({
          audioWidth: 900
        });
      });

    }
  }
});
