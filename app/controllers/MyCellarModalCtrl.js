'use strict';

app.controller('MyCellarModalCtrl', function($scope, $uibModalInstance, wine, FirebaseFactory, WineFactory, $mdToast) {
  $scope.wine = wine;

  $scope.close = () => {
    $uibModalInstance.close();
    $scope.wine = {};
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
