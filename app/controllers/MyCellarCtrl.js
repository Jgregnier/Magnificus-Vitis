"use strict";

app.controller('MyCellarCtrl', function($scope, $location, FirebaseFactory, WineFactory, $uibModal, $mdToast) {

  FirebaseFactory.getMyWines()
  .then((MyWines) => {
    console.log("MyWines", MyWines);
    $scope.wines = MyWines;
  });

  $scope.open = (wine) => {
    console.log(wine);
    let modalInstance = $uibModal.open({
      templateUrl: '../partials/myCellarModal.html',
      controller: 'MyCellarModalCtrl',
      resolve: {wine}
    });
  };

  $scope.deleteWine = (key) => {
    console.log("deleteing Wine", key);
    FirebaseFactory.deleteWine(key)
    .then((data) => {
      FirebaseFactory.getMyWines()
      .then((MyWines) => {
        $mdToast.show($mdToast.simple().position("top right").textContent('Wine Deleted!'));
        $scope.wines = MyWines;
      });
    });
  };

});
