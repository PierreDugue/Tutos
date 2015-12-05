var routes = angular.module('routes', ['ngRoute']);
routes.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: "convertXmlController",
				templateUrl: "Partials/View1.html"
			})
		.when('/view2',
			{
				controller: "FeedCtrl",
				templateUrl: "Partials/View2.html"
			})
		.otherwise({ redirectTo: '/' });
});