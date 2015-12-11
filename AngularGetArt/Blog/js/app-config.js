blogApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: "afficheMain",
				templateUrl: "partials/main.html"
			})
		.otherwise({ redirectTo: '/' });
});