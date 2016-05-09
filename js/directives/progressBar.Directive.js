app.directive("progressBar", ["$timeout", function ($timeout) {
    return {
        restrict: "EA",
        scope: {
            total: '@total',
            start: '@start' ,
            complete: '@complete'         	
        },     
        replace : true,
        link: function (scope, elem, attrs) {           
            scope.completeLabel = attrs.completeLabel;
            scope.showPercent = (attrs.showPercent) || true;         
            scope.$watch('complete', function () {              
              scope.progress = (scope.start + scope.complete)/scope.total;
              scope.isCompleted = scope.progress >= 1;
            });          
        },
        template: ' <div> \
                        <div class="progress"> \
                            <div class="progress-bar ng-class:{\'progress-bar-completed\': isCompleted };"  aria-valuenow="{{complete}}" aria-valuemin="0" aria-valuemax="{{total}}" style="width:{{progress * 100}}%;"></div> \
                        </div> \
                        <div class="progress-summary" ng-show="!isCompleted" >{{completeLabel}} {{showPercent ? progress*100 : complete | number:0}}{{showPercent?"%":""}}</div> \
                        <div class="progress-summary" ng-show="isCompleted" >The Task is 100% completed <i class="fa fa-check" aria-hidden="true"></i></div> \
                    </div> '
    };
}])
