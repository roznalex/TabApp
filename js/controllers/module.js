define(['angular'], function (ng) {
    'use strict';
    return ng.module('app.controllers', ['ngRoute'])
    	.run(function($rootScope, $http) {
    		$http.get('assets/tabs.json')
    			.success(function(data) {
    				$rootScope.data = data;
    			});
    	});
});
