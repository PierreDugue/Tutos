var factories = angular.module('factories', []);
factories.factory('namesFactory', function ($http) {
	var customers = [
		{ name: 'Marcel Prout', city: 'Nice' },
		{ name: 'Marcel Gogo', city: 'Turin' },
		{ name: 'Gogo Prout', city: 'Nice' }];
	var factory = {};
	factory.getCustomers = function () {
		return customers;
	};
	factory.setCustomers = function (customer) {

	}
	return factory;
});

factories.factory('getUrlFactorie', function ($http) {
	   var factory = [];
	factory.getUrl = function () {
        return $http.get("http://backend.deviantart.com/rss.xml?type=deviation&q=by%3Aratahime+sort%3Atime+meta%3Aall");
	}
	return factory;
});