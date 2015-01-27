
/* FACTORIES */
YsApp.factory('GetChapters', function($http){
  var GetChapters = {};
  GetChapters.get = function(locale, course_id, callback){
    $http.get('/' + locale + '/api/v1/courses/' + course_id).success(function(data){
      callback(data);
    });
  };
  return GetChapters;
});

YsApp.factory('GetTheoriesAndPractices', function($http){
  var GetTheoriesAndPractices = {};
  GetTheoriesAndPractices.get = function(locale, chapter_id, callback){
    $http.get('/' + locale + '/api/v1/chapters/' + chapter_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoriesAndPractices;
});

YsApp.factory('GetPracticeMedias', function($http){
  var GetPracticeMedias = {};
  GetPracticeMedias.get = function(locale, practice_id, callback){
    $http.get('/' + locale + '/api/v1/practices/' + practice_id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedias;
});

YsApp.factory('GetTheoryMedias', function($http){
  var GetTheoryMedias = {};
  GetTheoryMedias.get = function(locale, theory_id, callback){
    $http.get('/' + locale + '/api/v1/theories/' + theory_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedias;
});

YsApp.factory('GetTheoryMedia', function($http){
  var GetTheoryMedia = {};
  GetTheoryMedia.get = function(locale, media_id, callback){
    $http.get('/' + locale + '/api/v1/medias/' + media_id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedia;
});

YsApp.factory('GetPracticeMedia', function($http){
  var GetPracticeMedia = {};
  GetPracticeMedia.get = function(locale, media_id, callback){
    $http.get('/' + locale + '/api/v1/medias/' + media_id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedia;
});

// YsApp.factory('Locale', function($location){
//   var Locale = {};
//   Locale.getLocale = function(){
//     var url = $location.$$absUrl;
//     var locale = url.split("/")[3];
//     return locale;
//   };
//   return Locale;
// });



