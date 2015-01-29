
YsApp.factory('Course', function($http){
  var Course = {};
  Course.get = function(locale, id, callback){
    $http.get('/' + locale + '/api/v1/courses/' + id).success(function(data){
      callback(data);
    });
  };
  return Course;
});

YsApp.factory('Chapter', function($http){
  var Chapter = {};
  Chapter.get = function(locale, id, callback){
    $http.get('/' + locale + '/api/v1/chapters/' + id).success(function(data){
      callback(data);
    });
  };
  return Chapter;
});

// YsApp.factory('Chapter', function($http){
//
//   var Chapter = {};
//   Chapter.practices = [];
//   Chapter.theories = [];
//
//   Chapter.get = function(locale, id, callback){
//     var self = this;
//     $http.get('/' + locale + '/api/v1/chapters/' + id).success(function(data){
//       angular.forEach(data.theories, function(data){
//         var theory = {};
//         theory.theory = data.theory;
//         theory.medias = data.medias;
//         self.theories.push(theory);
//       });
//       angular.forEach(data.practices, function(data){
//         var practice = {};
//         practice.practice = data.practice;
//         practice.medias = data.medias;
//         self.practices.push(practice);
//       });
//       self.chapter = data.chapter;
//       callback(self);
//     });
//   };
//
//   return Chapter;
// });

YsApp.factory('Practice', function($http){
  var Practice = {};
  Practice.get = function(locale, id, callback){
    $http.get('/' + locale + '/api/v1/practices/' + id).success(function(data){
      callback(data);
    });
  };
  return Practice;
});

YsApp.factory('Theory', function($http){
  var Theory = {};
  Theory.get = function(locale, id, callback){
    $http.get('/' + locale + '/api/v1/theories/' + id).success(function(data){
      callback(data);
    });
  };
  return Theory;
});

YsApp.factory('GetTheoryMedia', function($http){
  var GetTheoryMedia = {};
  GetTheoryMedia.get = function(locale, id, callback){
    $http.get('/' + locale + '/api/v1/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedia;
});

YsApp.factory('GetPracticeMedia', function($http){
  var GetPracticeMedia = {};
  GetPracticeMedia.get = function(locale, id, callback){
    $http.get('/' + locale + '/api/v1/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedia;
});




