(function () {
  'use strict';

  angular.module('app')
    .directive('myCancelButton', ['$window', function ($window) {

      return {
        restrict: 'E',
        templateUrl: 'app/components/my-cancel-button/my-cancel-button-directive.html',
        link: function (scope, element) {
          element.bind('click', function () {
            $window.history.back();
            scope.$apply();
          });
        }
      }
    }]);
})();
