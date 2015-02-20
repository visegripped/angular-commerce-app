'use strict';

/**
 * @ngdoc overview
 * @name angularCommerceAppApp
 * @description
 * # angularCommerceAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularCommerceAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'angularCommerceAppApp.services'
	
  ])
  .config(function ($routeProvider) {
	  // ############# ROUTES
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	  .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
	  .when('/my', {
        templateUrl: 'views/my.html',
        controller: 'MyCtrl'
      })
	  .when('/searchResults', {
        templateUrl: 'views/results.html',
        controller: 'SearchResultsCtrl'
      })
	  .when('/product/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
	  
      .otherwise({
        redirectTo: '/'
      });
  });

