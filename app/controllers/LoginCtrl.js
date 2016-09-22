'use strict';

app.controller('LoginCtrl', function($scope, AuthFactory, $window, $mdToast) {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.loginWithEmailAndPassword = () => {
    AuthFactory.loginUserWithEmail($scope.account)
    .then((data) => {
      if (data === undefined) {
        $mdToast.show($mdToast.simple().position("top right").textContent("There was a problem logging in, try again"));
      } else {
        $mdToast.show($mdToast.simple().position("top right").textContent("Welcome!"));
      }

      console.log("logged in with email data", data);
      $window.location.href = '#/wines/search';
    });
  };

  $scope.registerWithEmailAndPassword = () => {
    AuthFactory.createUser($scope.account)
    .then((data) => {
      AuthFactory.loginUserWithEmail($scope.account)
      .then((data) => {
        console.log("this data", data);
        $window.location.href = '#/wines/search';
        $mdToast.show($mdToast.simple().position("top right").textContent(`New Account Made With ${data.providerData[0].email}`));
      });
    });
  };

  $scope.loginWithGoogle = () => {
    AuthFactory.loginUserWithGoogle()
    .then((userData) => {
      if (userData) {
        console.info('Google login data:', userData);
        $mdToast.show($mdToast.simple().position("top right").textContent(`Welcome ${userData.user.displayName}`));
        $window.location.href = '#/wines/search';
      }
    });
  };

  AuthFactory.setLocation();
});
