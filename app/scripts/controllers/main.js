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

        var colorArray = ['#389C75', '#FEFEFE', '#DFD122', '#3668A4', '#753790'];

        $http.get('lineChartData.json').success(function(data) {
          $scope.influxData = data ;
        });

        $scope.xAxisTickFormatFunction = function() {
                return function(d) {
                  return d3.time.format('%a %d')(new Date(d));
                };
              };

        $scope.xAxisScaleFunction = function() {
                return function(d) {
                  return d3.svg.axis().ticks(d3.time.days, 2);
                };
              };

        $scope.colorFunction = function() {
                return function(d, i) {
                  return colorArray[i];
                };
              };



      });
