'use strict';

/**
 * @ngdoc function
 * @name angularReportChartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularReportChartApp
 */
angular.module('angularReportChartApp')
  .controller('MainCtrl', function ($scope, $http) {

        $http.get('lineChartData.json').success(function(data) {
          $scope.lineChartData = data ;
        });

            $scope.xAxisTickFormatFunction = function() {
                return function(d) {
            return d3.time.format('%x')(new Date(d));
          };
              };
  });
