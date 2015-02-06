

//= require jquery
//= require lib/snap
//= require lib/angular
//= require lib/angular-ui-router
//= require lib/angular-route
//= require lib/angular-animate
//= require lib/angular-snap
//= require lib/loading-bar
//= require lib/lodash
//= require lib/restangular
//= require lib/mediaelement-and-player
//= require bootstrap/dropdown
//= require frontend/app
//= require frontend/config
//= require frontend/factories
//= require frontend/services
//= require frontend/directives
//= require frontend/controllers


$(document).ready(function(){
  $(".lang").bind('click', function(e){
    var is_french = $(this).hasClass("fr");
    if (is_french) {
      var url = window.location.href;
      var updated_url = url.replace(url.split("/")[3], "fr");
      window.location.replace(updated_url);
    }
    if (!is_french) {
      var url = window.location.href;
      var updated_url = url.replace(url.split("/")[3], "en");
      window.location.replace(updated_url);
    }
  });
});
