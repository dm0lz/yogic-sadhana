
YsApp.factory('Courses', ['$http', '$auth', function($http, $auth){
  var Courses = {};
  Courses.get = function(locale, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/courses').success(function(data){
      callback(data);
    });
  };
  return Courses;
}]);

YsApp.factory('Course', ['$http', '$auth', function($http, $auth){
  var Course = {};
  Course.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/courses/' + id).success(function(data){
      callback(data);
    });
  };
  return Course;
}]);
//
// YsApp.factory('Chapter', function($http, $q){
//   function Chapter(chapter){
//     this.chapter = chapter;
//   };
//   Chapter.prototype.setData = function(data){
//     this.chapter = data.chapter;
//   };
//   Chapter.prototype.getChapter = function(data){
//     return this.chapter;
//   };
//   Chapter.prototype.get = function(locale, id){
//     var def = $q.defer();
//     var scope = this;
//     $http.get('/' + locale + '/api/v1/chapters/' + id).success(function(data){
//          // console.log(data.chapter);
//         scope.setData(data);
//         def.resolve(data);
//     });
//     return def.promise;
//   };
//   return Chapter;
// });

YsApp.factory('Chapter', ['$http', '$auth', function($http, $auth){
  var Chapter = {};
  Chapter.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/chapters/' + id).success(function(data){
      callback(data);
    });
  };
  return Chapter;
}]);


YsApp.factory('Practice', ['$http', '$auth', function($http, $auth){
  var Practice = {};
  Practice.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/practices/' + id).success(function(data){
      callback(data);
    });
  };
  return Practice;
}]);

YsApp.factory('Theory', ['$http', '$auth', function($http, $auth){
  var Theory = {};
  Theory.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/theories/' + id).success(function(data){
      callback(data);
    });
  };
  return Theory;
}]);

YsApp.factory('GetTheoryMedia', ['$http', '$auth', function($http, $auth){
  var GetTheoryMedia = {};
  GetTheoryMedia.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetTheoryMedia;
}]);

YsApp.factory('GetPracticeMedia', ['$http', '$auth', function($http, $auth){
  var GetPracticeMedia = {};
  GetPracticeMedia.get = function(locale, id, callback){
    $http.get($auth.apiUrl() + '/' + locale + '/api/v1/medias/' + id).success(function(data){
      callback(data);
    });
  };
  return GetPracticeMedia;
}]);




