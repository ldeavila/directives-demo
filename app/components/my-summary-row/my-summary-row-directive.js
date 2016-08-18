(function () {
  'use strict';

  angular.module('app')
    .directive('mySummaryRow', function () {

      return {
        restrict: 'E',
        scope: {
          description: '@',
          isInitialReadonly: '@',
          value: '=',
          calculator: '&'
        },
        templateUrl: 'app/components/my-summary-row/my-summary-row-directive.html',
        link: function (scope) {
          scope.description = scope.description || 'Some Data';
          scope.isInitialReadonly = scope.isInitialReadonly || false;
        }
      }
    });
})();
