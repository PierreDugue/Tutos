'use strict';

/**
 * @ngdoc overview
 * @name angularApp2App
 * @description
 * # angularApp2App
 *
 * Main module of the application.
 */
angular
  .module('angularApp2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
