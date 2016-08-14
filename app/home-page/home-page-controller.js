(function () {
  'use strict';

  angular.module('app')
    .controller('homePageController', function () {
      var vm = this;

      vm.title = 'Santa Barbara Angular Meetup Group';
      vm.lead = 'Angualr Directives - Three Practical Examples'
    });
})();
