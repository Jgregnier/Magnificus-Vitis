'use strict';

app.controller('LoginCtrl', function($scope, AuthFactory, $window, $mdToast) {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.loginWithEmailAndPassword = () => {
    AuthFactory.loginUserWithEmail($scope.account)
    .then((data) => {
      $mdToast.show($mdToast.simple().position("top right").textContent("Welcome!"));
      console.log("logged in with email data", data);
      $window.location.href = '#/wines/search';
    });
  };

  $scope.registerWithEmailAndPassword = () => {
    AuthFactory.createUser($scope.account)
    .then((data) => {
      console.log("Email and password registration Data", data);
      AuthFactory.loginUserWithEmail($scope.account);
    });
  };

  $scope.loginWithGoogle = () => {
    AuthFactory.loginUserWithGoogle()
    .then((userData) => {
      if (userData) {
        $mdToast.show($mdToast.simple().position("top right").textContent(`Welcome ${userData.user.displayName}`));
        console.info('Google login data:', userData);
        $window.location.href = '#/wines/search';
      }
    });
  };

  AuthFactory.setLocation();
});
