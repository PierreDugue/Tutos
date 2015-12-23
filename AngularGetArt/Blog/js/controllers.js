'use strict';

blogApp.controller('afficheMain', function ($scope, mainFactory, $http) {

	$scope.articles = [];
	$scope.articles = mainFactory.getArticles();

	$http.get('datas/entries.json').success(function (data) {
		$scope.articles = data;
    });

	$scope.addNewArticle = function () {
		$scope.articles.push({ title: $scope.article.title, text: $scope.article.text, id: $scope.article.img });
	}

});

blogApp.controller('afficheDetails', ['$scope', '$routeParams', function ($scope, $routeParams) {
	$scope.entryId = $routeParams.entryId;
}]);