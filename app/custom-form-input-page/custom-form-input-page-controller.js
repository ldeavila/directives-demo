(function () {
  'use strict';

  angular.module('app')
    .controller('customFormInputPageController', function () {
      var vm = this;

      vm.isReadOnly = true
      vm.values = [
        {
          initial: 10,
          updated: 10
        },
        {
          initial: 20,
          updated: 20
        }
      ];
      vm.difference = function (num1, num2) {
        return num1 - num2;
      };
    });
})();
