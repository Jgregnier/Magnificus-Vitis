'use strict';

app.controller('WineListModalCtrl', function($scope, $uibModalInstance, wine, FirebaseFactory) {
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
      personalComment: ""
    };

    console.log(newWine);
    FirebaseFactory.saveWine(newWine)
    .then (() => {
      $scope.close();
    });
  };

  $scope.find = () => {
    console.log("lol");
  };

});

