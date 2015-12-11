blogApp.controller('afficheMain', function ($scope, mainFactory) {

	$scope.articles = [];
	$scope.articles = mainFactory.getArticles();
	
	$scope.addNewArticle = function ($scope) {
		$scope.articles.push({title: $scope.article.title, text: $scope.article.text});
	}

});