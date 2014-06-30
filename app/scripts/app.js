'use strict';

/**
 * @ngdoc overview
 * @name angularReportChartApp
 * @description
 * # angularReportChartApp
 *
 * Main module of the application.
 */
angular
  .module('angularReportChartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3ChartDirectives',
    'angular-radar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
