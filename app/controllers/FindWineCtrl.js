"use strict";

app.controller('FindWineCtrl', function ($scope, WineFactory, $uibModal) {
  $scope.zipCode = "";

  $scope.find = () => {
    WineFactory.getLocalStores($scope.zipCode)
    .then((localStores) => {
      console.log(localStores);

      let modalInstance = $uibModal.open({
        templateUrl: '../partials/googleMapModal.html',
        controller: 'GoogleMapModalCtrl',
        resolve: {localStores}
      });
    });
  };
});
