var controllersModule = angular.module('controllersModule', ['servicesModule']);
var feeds = [];
controllersModule.controller('FeedCtrl', function ($scope, FeedList) {
	$scope.feeds = FeedList.get();
	$scope.$on('FeedList', function (event, data) {
		$scope.feeds = data;
	});
});

controllersModule.controller('addUrl', function ($scope, FeedList) {

	$scope.urls = [];
	$scope.urls = FeedList.get();

	$scope.addNewUrl = function () {
		$scope.urls.push({title: $scope.newRSS.title, url: $scope.newRSS.url});
	}
})