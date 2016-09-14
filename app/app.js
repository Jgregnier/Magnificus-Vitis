"use strict";

var app = angular.module("Magnificus-Vitis", ["ngRoute", 'ui.bootstrap', 'uiGmapgoogle-maps'])
.constant('FirebaseUrl', "https://magnificus-vitis.firebaseio.com/");

//Check if user is logged in, granting access to certain pages only a user should be on
let isAuth = (AuthFactory)=> new Promise((resolve, reject)=>{
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: 'partials/loginPage.html',
    controller: 'LoginCtrl'
  }).
  when('/wines/search', {
    templateUrl: 'partials/searchWine.html',
    controller: 'WineSearchCtrl',
    resolve: {isAuth}
  }).
  when('/wines/results', {
    templateUrl: 'partials/wineList.html',
    controller: 'WineListCtrl',
    resolve: {isAuth}
  }).
  when('/wines/find', {
    templateUrl: 'partials/findWine.html',
    controller: 'FindWineCtrl',
    resolve: {isAuth}
  }).
  when('/mycellar', {
    templateUrl: 'partials/myCellar.html',
    controller: 'MyCellarCtrl',
    resolve: {isAuth}
  }).
  otherwise('/login');
});

app.config(function (uiGmapGoogleMapApiProvider, GoogleMapKey) {
  uiGmapGoogleMapApiProvider.configure({
    key: GoogleMapKey,
    v: '3.25',
    libraries: 'weather, geometry, visualization'
  });
});

app.run((FbCreds) => {
  firebase.initializeApp(FbCreds);
});
