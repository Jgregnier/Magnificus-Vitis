"use strict";

app.controller('FindWineCtrl', function ($scope, WineFactory) {
  $scope.zipCode = "";

  $scope.storesArray = [];

  $scope.find = () => {
    WineFactory.getLocalStores($scope.zipCode)
    .then((localStores) => {
      console.log(localStores);
      for(let store in localStores){
        if (localStores[store].state ==="TN") {
          $scope.storesArray.push(localStores[store]);
        };
      };
      console.log($scope.storesArray);
    });
  };
});
