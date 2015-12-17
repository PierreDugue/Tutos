blogApp.factory('mainFactory', function($http){
	var articles = [
	];
	
	var factory = {};
	factory.getArticles = function(){
		return articles;
	}
	
	return factory;
});