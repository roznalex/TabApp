define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('tabsCtrl', ['$rootScope', '$scope', '$routeParams', function ($rootScope, $scope, $routeParams) {
		$scope.tabId = $routeParams.id;

		if ($scope.tabId) {
			for (var item in $scope.data) {
				if (!$scope.data.hasOwnProperty(item)) continue;
				if ($scope.data[item].id === $scope.tabId) {
					$scope.activeTab = $scope.data[item];
					$scope.path      = $scope.data[item].path;
				}
			}
		} else {
			for (var item in $scope.data) {
				if (!$scope.data.hasOwnProperty(item)) continue;
				if ($scope.data[item].order === 0) {
					$scope.activeTab = $scope.data[item];
					$scope.path      = $scope.data[item].path;
				}
			}
		}
	}]);
});
