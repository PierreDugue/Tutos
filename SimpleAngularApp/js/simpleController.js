var myDemoApp = angular.module('myDemoApp', ['ngRoute']);

myDemoApp.config(function ($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: "mySimpleController",
				templateUrl: "Partials/View1.html"
			})
		.when("/",
			{
				controller: "mySimpleController",
				templateUrl: "Partials/View2.html"
			})
		.otherwise({ redirectTo: '/' });
});

var controllers = {};
controllers.mySimpleController = function ($scope) {
	$scope.names = [
		{ name: 'Marcel Prout', city: 'Nice' },
		{ name: 'Marcel Gogo', city: 'Turin' },
		{ name: 'Gogo Prout', city: 'Nice' }];
};

myDemoApp.controller(controllers);
