blogApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: "afficheMain",
				templateUrl: "partials/main.html"
			})
		.when('/details',
			{
				controller: "afficheMain",
				templateUrl: "partials/details.html"
			})
		.otherwise({ redirectTo: '/' });
});