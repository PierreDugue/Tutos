
var controllersMod = angular.module('controllersMod', ['factories']);

var controllers = {};

controllers.mySimpleController = function ($scope, namesFactory) {
	$scope.names = [];
	$scope.names = namesFactory.getCustomers();
	$scope.addCustomer = function () {
		$scope.names.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
	}
};

controllersMod.controller(controllers);
