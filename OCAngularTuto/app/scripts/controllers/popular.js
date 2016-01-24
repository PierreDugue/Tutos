'use strict';

/**
 * @ngdoc function
 * @name ocangularTutoApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the ocangularTutoApp
 */
angular.module('ocangularTutoApp')
	.controller('PopularCtrl', function ($scope, $http, serviceEntries) {

		$scope.entries = [];

		$http.get('datas/entries.json').success(function (data) {				
			$scope.entries = serviceEntries.metierEntries(data);
			console.log($scope.entries);
		});

	});
