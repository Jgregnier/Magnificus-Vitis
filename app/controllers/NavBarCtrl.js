"use strict";

app.controller("NavBarCtrl", function($scope, $location, AuthFactory, $window, $mdToast) {

  $scope.logout = () => {
    $mdToast.show($mdToast.simple().position("top right").textContent('Log out complete!'));
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
