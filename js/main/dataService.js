(function(){
    angular
        .module('lightBoxDemo')
        .factory('dataService', ['$http', function($http) {
          var dataService = {
            get: function() {     
              return $http.get('data').then(function (response) {       
                return response.data;
              });  
            }
          };
          return dataService;
        }]);
})();