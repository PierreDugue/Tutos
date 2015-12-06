
var feedModule = angular.module('feedModule', ['ngResource']);
var feeds = [];
feedModule.factory('FeedLoader', function ($resource) {
	return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
		fetch: { method: 'JSONP', params: { v: '1.0', callback: 'JSON_CALLBACK' } }
	});
})
feedModule.service('FeedList', function ($rootScope, FeedLoader) {
	this.get = function () {
		var feedSources = [
			{ title: 'deviantArt', url: 'http://backend.deviantart.com/rss.xml?type=deviation&q=by%3Aratahime+sort%3Atime+meta%3Aall' },
			{ title: 'Korben', url: 'http://korben.info/feed' },
			{ title: 'ZDnet', url: 'http://www.zdnet.fr/feeds/rss/actualites/' },
			{ title: 'NYT', url: 'http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml' }
		];
		if (feeds.length === 0) {
			for (var i = 0; i < feedSources.length; i++) {
				FeedLoader.fetch({ q: feedSources[i].url, num: 10 }, {}, function (data) {
					var feed = data.responseData.feed;
					feeds.push(feed);
				});
			}
		}
		return feeds;
	};
})
feedModule.controller('FeedCtrl', function ($scope, FeedList) {
	$scope.feeds = FeedList.get();
	$scope.$on('FeedList', function (event, data) {
		$scope.feeds = data;
	});
	
	
});