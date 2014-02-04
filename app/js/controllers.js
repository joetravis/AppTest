'use strict';

/* Controllers */


// function MyCtrl1() {}
// MyCtrl1.$inject = [];


// function MyCtrl2() {
// }
// MyCtrl2.$inject = [];

angular.module('myApp.controllers', []).
	controller('MyCtrl1', ['$scope', '$window', function($scope, $window) {
        $scope.centerMap = function (position) {
            $scope.map.center.latitude = position.coords.latitude;
            $scope.map.center.longitude = position.coords.longitude;
            $scope.addMarker(position.coords);
        };

        $scope.addMarker = function (coords) {
            $scope.map.markers.push({
                latitude: coords.latitude,
                longitude: coords.longitude,
                options: {
                    visible: true
                }
            });
        };

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            options: {
                panControl: true
            },
            zoom: 8,
            markers: [],
            events: {
                click: function(a, b, c) {
                    console.log(a);
                    console.log(b);
                    console.log(c);
                }
            }
        };

        $scope.resetCenter = function() {
            $scope.map.center.latitude = 45;
            $scope.map.center.longitude = -73;
        };
        $window.navigator.geolocation.getCurrentPosition($scope.centerMap);
	}]).
	
	controller('MyCtrl2', function() {

	});
