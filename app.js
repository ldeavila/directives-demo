(function () {
  'use strict';

  angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/home-page/home-page-controller.html',
          controller: 'homePageController',
          controllerAs: 'vm'
        })
        .when('/cancel-button', {
          templateUrl: 'app/cancel-button-page/cancel-button-page-controller.html',
          controller: 'cancelButtonPageController',
          controllerAs: 'vm'
        })
        .when('/contextual-nav-bar', {
          templateUrl: 'app/contextual-nav-bar-page/contextual-nav-bar-page-controller.html',
          controller: 'contextualNavBarPageController',
          controllerAs: 'vm'
        })
        .when('/custom-form-input', {
          templateUrl: 'app/custom-form-input-page/custom-form-input-page-controller.html',
          controller: 'customFormInputPageController',
          controllerAs: 'vm'
        })
        .when('/some-other-page', {
          templateUrl: 'app/some-other-page/some-other-page-controller.html',
          controller: 'someOtherPageController',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
})();
