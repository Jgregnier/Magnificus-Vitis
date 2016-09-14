'use strict';

app.controller('LoginCtrl', function($scope, AuthFactory, $window) {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.loginWithEmailAndPassword = () => {
    AuthFactory.loginUserWithEmail($scope.account)
    .then((data) => {
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
        console.info('Google login data:', userData);
        $window.location.href = '#/wines/search';
      }
    });
  };

  AuthFactory.setLocation();
});
