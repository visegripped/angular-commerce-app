// JavaScript Document
'use strict';
angular.module('angularCommerceAppApp')
  .controller('ProductCtrl', function ($scope, ergastAPIservice) {
    $scope.product = [];
    ergastAPIservice.fetchProductDetail().success(function (response) {
        $scope.product = response; 
    });
  });
  
  
  angular.module('angularCommerceAppApp')
  .controller('SearchResultsCtrl', function ($scope, ergastAPIservice) {
    $scope.searchResults = [];
    ergastAPIservice.fetchSearchResults().success(function (response) {
        $scope.searchResults = response; 
    });
  });
 
angular.module('angularCommerceAppApp')
  .controller('CartCtrl', function ($scope, ergastAPIservice) {
    $scope.cartDetail = [];
    ergastAPIservice.fetchCartDetail().success(function (response) {
        $scope.cartDetail = response; 
    });
  });
  
  angular.module('angularCommerceAppApp')
  .controller('MyCtrl', function ($scope) {
	  console.log(' -> MyCtrl executed');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });