app.controller("MainController", function($scope, $http, CatService, $routeParams, $location){
  $scope.cats = "the cat gang...";
  console.log("we are starting the requests ...");
  CatService.getCats().then(function(payload){
    console.log("we are getting all Cats");
    $scope.cat_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });

  $scope.cat = {};

  $scope.newCat = function(){
    cat_info = $scope.cat;
    CatService.postCat(cat_info);
  }
});

app.controller('showController', function($scope, $http, CatService, $routeParams){
  $scope.num = $routeParams.id
  CatService.getCat($scope.num).then(function(single){
    console.log("we are getting ONE Cat:");
    $scope.singleCat = single.data;
  });

})
