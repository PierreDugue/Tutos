'use strict';

/**
 * @ngdoc overview
 * @name ocangularTutoApp
 * @description
 * # ocangularTutoApp
 *
 * Main module of the application.
 */
angular
  .module('ocangularTutoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
