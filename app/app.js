"use strict";

var app = angular.module("Magnificus-Vitis", ["ngRoute", 'ui.bootstrap', 'uiGmapgoogle-maps'])
.constant('FirebaseUrl', "https://magnificus-vitis.firebaseio.com/");

app.config(function($routeProvider) {
  $routeProvider.
  when('/wines/search', {
    templateUrl: 'partials/searchWine.html',
    controller: 'WineSearchCtrl'
  }).
  when('/wines/results', {
    templateUrl: 'partials/wineList.html',
    controller: 'WineListCtrl'
  }).
  when('/wines/find', {
    templateUrl: 'partials/findWine.html',
    controller: 'FindWineCtrl'
  }).
  when('/mycellar', {
    templateUrl: 'partials/myCellar.html',
    controller: 'MyCellarCtrl'
  }).
  otherwise('/wines/search');
});

app.config(function (uiGmapGoogleMapApiProvider, GoogleMapKey) {
  uiGmapGoogleMapApiProvider.configure({
    key: GoogleMapKey,
    v: '3.25',
    libraries: 'weather, geometry, visualization'
  });
});
