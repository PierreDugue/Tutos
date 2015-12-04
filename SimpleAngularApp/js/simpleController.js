var myDemoApp = angular.module('myDemoApp', ['ngRoute']);

myDemoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: "mySimpleController",
				templateUrl: "Partials/View1.html"
			})
		.when('/view2',
			{
				controller: "mySimpleController",
				templateUrl: "Partials/View2.html"
			})
		.otherwise({ redirectTo: '/' });
});

myDemoApp.factory('simpleFactory', function(){
	var customers =  [
		{ name: 'Marcel Prout', city: 'Nice' },
		{ name: 'Marcel Gogo', city: 'Turin' },
		{ name: 'Gogo Prout', city: 'Nice' }];
	var factory = {};
	factory.getCustomers =  function(){
		return customers;
	};
	factory.setCustomers = function(customer){
		
	}
	return factory;
});

var controllers = {};
controllers.mySimpleController = function ($scope, simpleFactory) {
	$scope.names = [];
	
	
	$scope.names = simpleFactory.getCustomers();
	
	$scope.addCustomer = function () {
		$scope.names.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
	}
};

myDemoApp.controller(controllers);
