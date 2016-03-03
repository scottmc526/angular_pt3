app.service("CatService", function($http, $routeParams){
  var CatService = {};

  CatService.getCats = function(){
    return $http.get("http://localhost:3000/cats");
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats", {method: "jsonp"});
  }

  CatService.getCat = function(cat_id){
    return $http.get("http://localhost:3000/cats/"+cat_id);
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats/"+cat_id, {method: "jsonp"});
  }
  //
  // CatService.postCat = function(cat) {
  //   return $http.post('/cats')
  // }

  return CatService;
});
