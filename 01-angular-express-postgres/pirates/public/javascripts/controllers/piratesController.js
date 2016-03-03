app.controller('piratesController', ['$scope', 'piratesService', function($scope, piratesService){
    $scope.showForm = false;
    piratesService.all().then(function(pirates) {
      $scope.pirates = pirates;
      console.log($scope.pirates.pirates);
    })

    $scope.newP = function(){
      $scope.showForm = !$scope.showForm
      console.log($scope.showForm);
    }

}])
