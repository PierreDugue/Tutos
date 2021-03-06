'use strict';

/**
 * @ngdoc service
 * @name automationApp.generateJs
 * @description
 * # generateJs
 * Factory in the automationApp.
 */
angular.module('automationApp')
    .factory('generateJs', function ($http) {

        return {
            generateNames: function (campaign) {
                campaign[0].name = campaign[0].name + "_TEST";
                campaign[0].url = campaign[0].url + "_TEST";
                campaign[0].num = campaign[0].num + "_TEST";
                return campaign;
            },
            getFromMock: function () {
                return $http.get("http://www.mocky.io/v2/56ac29120f00004a4f987f67")
                    .then(function (response) {
                        return response.data;
                    }, function (httpData) {
                        console.log('Error lors de la récupération des infos');
                    });
            }
        };
    });
