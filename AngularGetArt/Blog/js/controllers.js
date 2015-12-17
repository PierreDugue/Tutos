blogApp.controller('afficheMain', function ($scope, mainFactory) {

	$scope.articles = [];
	$scope.articles = mainFactory.getArticles();
	
	$scope.addNewArticle = function () {
		$scope.articles.push({title: $scope.article.title, text: $scope.article.text, img: $scope.article.img});
	}

});