var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/cats', {
      templateUrl: 'partials/allCats.html',
      controller: 'MainController'
  })
  .when('/cats/:id', {
    templateUrl: 'partials/show.html',
    controller: 'showController'
  })
})
