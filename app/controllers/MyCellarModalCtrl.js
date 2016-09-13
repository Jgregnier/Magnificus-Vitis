'use strict';

app.controller('MyCellarModalCtrl', function($scope, $uibModalInstance, wine, FirebaseFactory, WineFactory) {
  $scope.wine = wine;

  $scope.close = () => {
    $uibModalInstance.close();
    $scope.wine = {};
  };

  $scope.findWine = () => {
    WineFactory.getLocalStores()
    .then ((localStores) => {
      console.log(localStores);
    });
  };

  $scope.edit = (wineKey) => {
    let updatedWine = {
      personalRating: wine.personalRating,
      personalComment: wine.personalComment
    };

    console.log(wineKey, updatedWine);
    FirebaseFactory.editWine(wineKey, updatedWine)
    .then((data) => {
      $uibModalInstance.close();
    });
  };

});
