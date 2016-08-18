(function () {
  'use strict';

  angular.module('app')
    .controller('contextualNavBarPageController', function () {
      var vm = this;

      vm.user = {
        firstName: 'Luis',
        lastName: 'De Avila',
        role: 'admin'
      };
    });
})();
