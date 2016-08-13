(function () {
  'use strict';

  angular.module('app')
    .directive('myBackButton', ['$window', function ($window) {

      return {
        restrict: 'E',
        templateUrl: './app/components/my-back-button/my-back-button-directive.html',
        link: function (scope, element) {
          element.bind('click', function () {
            $window.history.back();
            scope.$apply();
          });
        }
      }
    }]);
})();
