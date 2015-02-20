'use strict';

/**
 * @ngdoc function
 * @name angularCommerceAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCommerceAppApp
 */
angular.module('angularCommerceAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
