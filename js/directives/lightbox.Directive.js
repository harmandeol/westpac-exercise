(function(){
    angular
        .module('lightBoxDemo')
        .directive('lightBox', function() {
          return {
            restrict: 'E',
            transclude: {
                'title': 'h4'       
              },
            scope: {
              show: '='
            },
            replace: true,     
            link: function(scope, element, attrs) {
              scope.lightboxStyle = {};
              if (attrs.width)
                scope.lightboxStyle.maxWidth = attrs.width;
              if (attrs.height)
                scope.lightboxStyle.height = attrs.height;
              scope.hidelightBox = function() {
                scope.show = false;
              };       
            },
            template: ' <div class="container" ng-show="show"> \
                            <div class="ng-lightbox-overlay" ng-click="hidelightBox()"></div> \
                            <div class="ng-lightbox" ng-style="lightboxStyle"> \
                                <div class="ng-lightbox-header"> \
                                    <button class="ng-lightbox-close"  ng-click="hidelightBox()"> \
                                      <i class="fa fa-close" title="Close" aria-hidden="true"></i> \
                                      <span class="sr-only">Close</span> \
                                    </button> \
                                    <div class="ng-lightbox-title" ng-transclude="title"></div> \
                                </div> \
                                <div class="ng-lightbox-content" ng-transclude></div> \
                            </div> \
                        </div> '    
          };
        });
})();