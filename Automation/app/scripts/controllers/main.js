'use strict';

/**
 * @ngdoc function
 * @name automationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the automationApp
 */
angular.module('automationApp')
    .controller('MainCtrl', function ($scope, generateJs, $http) {
        var campaigns = [];

        $scope.generateNames = function () {
            campaigns.push({
                name: $scope.campaign.name,
                url: $scope.campaign.url,
                num: $scope.campaign.num
            });

            $scope.campaignTrueNames = generateJs.generateNames(campaigns);
            
            $http.get("http://www.mocky.io/v2/56ac29120f00004a4f987f67").then(function (response) {
                console.log(response);
                $scope.infoFromMock = response.data;
            });

           // $scope.infoFromMock = generateJs.getFromMock();
        }
    });
