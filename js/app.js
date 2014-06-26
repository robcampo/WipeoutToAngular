
var app = angular.module('wipeout-angular', []);

/**
 * Main controller
 */
app.controller('CollapsableCtrl',
    function ($scope, appService, textService) {
        $scope.showContent = false;

        $scope.appName = appService.app.name;
        $scope.text = textService.text;
    }
);

app.directive('collapsible',
    function () {
        return {
            // 'E' = Element
            restrict: 'E',
            //template: '<div>{{text.content}}</div>'
            templateUrl: 'collapsible.html'
        }
    }
);

/**
 * Application service
 */
app.factory('appService',
    function () {
        return {
            app: {
                name: 'Wipeout demo'
            }
        }
    }
);

/**
 * Text service
 */
app.factory('textService',
    function () {
        return {
            text: {
                header: 'Open/close',
                content: 'This is content for the component'
            }
        }
    }
);

