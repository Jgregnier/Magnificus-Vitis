"use strict";

app.controller("NavBarCtrl", function($scope, $location, AuthFactory, $window) {

  $scope.logout = () => {
    AuthFactory.logout()
    .then((logoutData) => {
      $window.location.href = '#/login';
      console.log('Logged out', logoutData);
    });
  };

  firebase.auth().onAuthStateChanged(function(user) {
    $scope.isLoggedIn = AuthFactory.isAuthenticated();
  });

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
