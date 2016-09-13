"use strict";

app.controller('FindWineCtrl', function ($scope, WineFactory) {
  $scope.zipCode = "";

  $scope.storesArray = [];

  $scope.find = () => {
    WineFactory.getLocalStores($scope.zipCode)
    .then((localStores) => {
      console.log(localStores);
      for(let i=0; i < 25; i++){
      // for(let store in localStores){
        // if (localStores[store].state ==="TN") {
        //   $scope.storesArray.push(localStores[store]);
        // };
        $scope.storesArray.push(localStores[i]);
      };
      console.log($scope.storesArray);
    });
  };
});
