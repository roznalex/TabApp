define(['./app'], function (app) {
	'use strict';
	return app.config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: 'view/partial.html',
			controller : 'tabsCtrl'
		});

		$routeProvider.when('/tabs/:id', {
			templateUrl: 'view/partial.html',
			controller : 'tabsCtrl'
		});

		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}]);
});
