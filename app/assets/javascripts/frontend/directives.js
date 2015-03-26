
YsApp.directive('langToggle', ['$location', function($location){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      element.bind('click', function(el){
        if(el.target.alt == "France"){
          window.location = '/fr/ys#' + $location.$$path;
          scope.$apply();
        }else if(el.target.alt == "England"){
          window.location = '/en/ys#' + $location.$$path;
          scope.$apply();
        }
      });
    }
  }
}]);

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
      scope.togglePlay = function(){
        var el = angular.element(element).mediaelementplayer();
        if (el[0].paused){
          el[0].play();
        }else{
          el[0].pause();
        }
        toggleButton();
      };

      var toggleButton = function(e){
        var button = angular.element("button.btn.btn-lg.btn-block");
        ($("button.btn.btn-lg.btn-block").text() === "Play") ? $("button.btn.btn-lg.btn-block").text("Pause") : $("button.btn.btn-lg.btn-block").text("Play");
        button.toggleClass("btn-success btn-danger");
      };
    }

  }
});
