'use strict';

/**
 * @ngdoc overview
 * @name automationApp
 * @description
 * # automationApp
 *
 * Main module of the application.
 */
angular
  .module('automationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
