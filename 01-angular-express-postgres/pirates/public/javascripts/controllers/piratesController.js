app.controller('piratesController', ['$scope', 'piratesService', function($scope, piratesService){
  piratesService.all().then(function(pirates) {
      $scope.pirates = pirates;
      console.log($scope.pirates.pirates);
    })
}])
