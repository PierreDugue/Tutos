var servicesModule = angular.module('servicesModule', ['factoriesModule'])
var feeds = [];
servicesModule.service('FeedList', function ($rootScope, FeedLoader) {
	this.get = function () {
		var feedSources = [
			{ title: 'Korben', url: 'http://korben.info/feed' },
			{ title: 'ZDnet', url: 'http://www.zdnet.fr/feeds/rss/actualites/' },
			{ title: 'NYT', url: 'http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml' }
		];
		
		if (feeds.length === 0) {
			for (var i = 0; i < feedSources.length; i++) {
				FeedLoader.fetch({ q: feedSources[i].url, num: 10 }, {}, function (data) {
					var feed = data.responseData.feed;
					console.log(feed);
					feeds.push(feed);
				});
			}
		}
		return feeds;
	};
})