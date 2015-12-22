blogApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: "afficheMain",
				templateUrl: "partials/main.html"
			})
		.when('/details/:entryId',
			{
				controller: "afficheDetails",
				templateUrl: "partials/details.html"
			})
		.otherwise({ redirectTo: '/' });
});