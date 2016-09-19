'use strict';

app.controller('WineListModalCtrl', function($scope, $uibModalInstance, wine, FirebaseFactory, AuthFactory, WineFactory, $mdToast) {
  $scope.wine = wine;

  $scope.close = () => {
    $uibModalInstance.close();
    $scope.wine = {};
  };

  $scope.save = (wineObj) => {

    let newWine = {
      wineName: wineObj.name,
      wineVarietal: wineObj.varietal,
      wineVintage: wineObj.vintage,
      wineRegion: wineObj.region,
      winePrice: wineObj.price,
      wineRank: wineObj.snoothrank,
      wineId: wine.code,
      wineImage: wine.image,
      personalRating: "",
      personalComment: "",
      uid: AuthFactory.getUserId()
    };

    console.log(newWine);
    $mdToast.show($mdToast.simple().position("top right").textContent("Wine sent to your cellar"));
    FirebaseFactory.saveWine(newWine)
    .then (() => {
      $scope.close();
    });
  };

});

