blogApp.factory('mainFactory', function($http){
	var articles = [
		{title : "1er Article", text : "Le text de l'article 1"},
		{title : "1er Article", text : "Le text de l'article 1"}
	];
	
	var factory = {};
	factory.getArticles = function(){
		return articles;
	}
	
	return factory;
});