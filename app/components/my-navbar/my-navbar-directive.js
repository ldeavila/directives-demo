(function () {
  'use strict';

  angular.module('app')
    .factory('myApiService', ['$location', function ($location) {
      return {
        logout: function () {
          $location.path('/');
        }
      }
    }])
    .directive('myNavbar', ['$location', 'myApiService', function ($location, myApiService) {
      return {
        restrict: 'E',
        scope: {
          user: '='
        },
        templateUrl: 'app/components/my-navbar/my-navbar-directive.html',
        link: function (scope) {
          scope.isCurrentLocation = function (path) {
            return path === $location.path();
          };

          scope.isAdmin = function (role) {
            return role === 'admin';
          };

          scope.logout = myApiService.logout;
        }
      }
    }]);
})();
