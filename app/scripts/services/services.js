'use strict';


angular.module('angularCommerceAppApp.services', []).
  factory('ergastAPIservice', function($http,$route) {

    var ergastAPI = {};

    ergastAPI.fetchProductDetail = function() {
      return $http({
        method: 'JSON', 
		data : {
			'pid' : $route.current.params.productId,
			'_cmd' : 'appProductGet',
			'_v' : '201411',
			'_uuid' : 1000
		},
		url : 'sample_data/gbjersey.json'
 //       url: '/jsonapi/v-201411/appProductGet' //appReviewsList.
      });
    };
	
	    ergastAPI.fetchCartDetail = function() {
			var cartId = ''; //todo -> where do we get this? some value pulled from localStorage?
      return $http({
        method: 'JSON', 
		data : {
      '_uuid':1234,
      '_session':'bcd2e8f0e34e82327252570a2168f114',
      '_cmd' : 'pipeline',
      '@cmds':[
        {'_cmd':'cartDetail','_cartid':'8fxoBK9xD91OgMty2QlPSicGT','_uuid':3515}
      ],
      '_clientid':'zmvc',
      '_domain':'www.sportsworldchicago.com',
      '_userid':'3527',
      '_deviceid':'',
      '_authtoken':'',
      '_version':201411},
//		url : 'sample_data/cart.json'
        url: '/jsonapi' //appReviewsList.
      });
    };
	
    ergastAPI.fetchSearchResults = function() {
      return $http({
        method: 'JSON', 
		data : {
			'pid' : '10822878',
			'mode' : 'elastic-search',
			'size' : 200,
			'type' : 'product',
			'facets' : {'app_nfl':{'terms':{'field':'app_nfl'}},'app_prod_demographic':{'terms':{'field':'app_prod_demographic'}},'app_t_shirts':{'terms':{'field':'app_t_shirts'}},'app_brands':{'terms':{'field':'app_brands'}}},
			'query' : {'filtered':{'query':{'function_score':{'filter':{'and':[{'and':[{'term':{'app_department':'t_shirt'}}]},{'or':[{'term':{'app_nfl':'green_bay_packers'}}]}]},'boost_mode':'sum','script_score':{'script':'doc[\'boost\'].value'}}},'filter':{'and':[{'has_child':{'type':'sku','query':{'range':{'available':{'gte':1}}}}},{'not':{'term':{'tags':'IS_DISCONTINUED'}}}]}}},
			'_cmd' : 'appPublicSearch',
			'_v' : '201411',
			'_uuid' : 1001
		},
		url : 'sample_data/results.json'
 //       url: '/jsonapi/v-201411/appProductGet' //appReviewsList.
      });
    };

    return ergastAPI;
  });