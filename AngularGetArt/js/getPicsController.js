
var controllersMod = angular.module('controllersMod', ['factories']);

var controllers = {};

controllers.mySimpleController = function ($scope, namesFactory) {
	$scope.names = [];
	$scope.names = namesFactory.getCustomers();
	$scope.addCustomer = function () {
		$scope.names.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
	}
};

controllers.convertXmlController = function($scope,getUrlFactorie){

          $scope.infos = [];
        //   loadTodos();
          
        //   function loadTodos(){
        //     getUrlFactorie.getUrl().success(function(data){
        //         infosPic  = x2js.xml_str2json(data);
        //         console.log(infosPic.channel.item.link);
        //         $scope.infos = infosPic.channel.item.link;
        //         });
        //     }
        };

controllersMod.controller(controllers);
