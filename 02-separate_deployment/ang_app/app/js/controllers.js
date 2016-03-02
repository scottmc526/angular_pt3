app.controller("MainController", function($scope, $http, CatService, $routeParams){
  $scope.cats = "the cat gang...";
  $scope.num = $routeParams.id
  console.log("we are starting the requests ...");
  CatService.getCats().then(function(payload){
    console.log("we are getting all Cats");
    $scope.cat_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });

  CatService.getCat($scope.num).then(function(single){
    console.log("we are getting ONE Cat:");
    $scope.singleCat = single.data;
  });

});
