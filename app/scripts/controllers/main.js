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

        $http.get('pieChartData.json').success(function(data) {
          $scope.pieChartData = data ;
        });

        $http.get('radarChartData.json').success(function(data) {
          $scope.radarChartData = data;
          console.log($scope.radarChartData);
        });

        $scope.xAxisTickFormatFunction = function() {
                return function(d) {
                  return d3.time.format('%d')(new Date(d));
                };
              };

        $scope.yAxisTickFormatFunction = function() {
                return function(d) {
                  return d3.format(',.1f')(d);
                };
              };

        $scope.xFunction = function() {
          return function(d) {
            return d.key;
          };
        };

        $scope.yFunction = function() {
          return function(d) {
            return d.y;
          };
        };


        $scope.colorFunction = function() {
                return function(d, i) {
                  return colorArray[i];
                };
              };



      });
