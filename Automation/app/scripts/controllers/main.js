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
            var campaignTrueNames = generateJs.generateNames(campaigns);
        }
    });
