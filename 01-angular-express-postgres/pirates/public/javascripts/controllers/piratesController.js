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

    $scope.sayHi = function(){
      console.log('hi');
    }
    piratesService.create().then(function(pirates){
      var pirate = {}
      pirate.name = $scope.name;
      pirate.poison = $scope.poison;
      pirate.accessory = $scope.accessory;
      console.log(pirate);
    })


}])
