var controllersModule = angular.module('controllersModule', ['servicesModule']);
var feeds = [];
controllersModule.controller('FeedCtrl', function ($scope, FeedList) {
	$scope.feeds = FeedList.get();
	$scope.$on('FeedList', function (event, data) {
		$scope.feeds = data;
	});
});