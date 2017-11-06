'use strict';

/**
 * @ngdoc overview
 * @name travailAngularApp
 * @description
 * # travailAngularApp
 *
 * Main module of the application.
 */
angular
  .module('travailAngularApp', [
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
