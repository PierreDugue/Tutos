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
        }
        $scope.getMock = function () {
            generateJs.getFromMock().then(function (infos) {
                console.log(infos);
                $scope.infoFromMock = infos;
            },
                function (data) {
                    console.log("FAIL");
                });
        };
    });
