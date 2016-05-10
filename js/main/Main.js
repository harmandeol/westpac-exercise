(function(){
    'use strict';
    
    angular
        .module('lightBoxDemo')
        .controller('MainCtrl', ['$scope','dataService','$interval', function($scope, dataService, $interval) {
  
        function Initialise(){
          $scope.lightboxShown = false;
          $scope.start = 0;
          $scope.finish = 100;
          $scope.complete = 1;
        }
        
        Initialise();
        
        var pollingPromise;
        function beginPolling(start, finish, duration){
          var pollingInterval = 250;
          var incrementValue = pollingInterval/duration * finish;
          $scope.complete = start;
          $interval(function() {
              $scope.complete += incrementValue;        
          }, pollingInterval, duration/pollingInterval);
        }
        
        $scope.loadData = function() {      
            $interval.cancel(pollingPromise);
            Initialise();
            dataService.get().then(function(data) {
              var lightbox = data.data.lightbox;
              $scope.start = lightbox.start;
              $scope.finish = lightbox.finish;  
              pollingPromise = beginPolling(lightbox.start, lightbox.finish, lightbox.duration);
              $scope.lightboxShown = true;
            });
        }
        
        $scope.toggleLightBox = function() {
          $scope.lightboxShown = !$scope.lightboxShown;
        };
      }]);
})();