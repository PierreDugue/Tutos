var factoriesModule = angular.module('factoriesModule', []);
factoriesModule.factory('FeedLoader', function ($resource) {
	return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
		fetch: { method: 'JSONP', params: { v: '1.0', callback: 'JSON_CALLBACK' } }
	});
})