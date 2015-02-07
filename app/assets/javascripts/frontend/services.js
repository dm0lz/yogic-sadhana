
/* SERVICES  */
// YsApp.service('Seeker', [function($event){
//   this.seekPercentage = function ($event) {
//     var percentage = ($event.offsetX / $event.target.offsetWidth);
//     if (percentage <= 1) {
//       return percentage;
//     } else {
//       return 0;
//     }
//   };
// }]);

YsApp.service('Locale', ['$location', function($location){
  this.getLocale = function(){
    var url = $location.$$absUrl;
    var locale = url.split("/")[3];
    return locale;
  };
}]);
