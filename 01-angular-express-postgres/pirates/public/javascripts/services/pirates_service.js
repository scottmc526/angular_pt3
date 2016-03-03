app.factory('piratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates').then(function (response) {
        return response.data;
      })
    },

    create: function(name, poison, accessory){
      var pirate = {}
      pirate.name = name;
      pirate.poison = poison;
      pirate.accessory = accessory
      return $http.post('/api/pirates', pirate);
      console.log(pirate);
    },

    test: function(){
      console.log('hitting');
    }
  }
})
