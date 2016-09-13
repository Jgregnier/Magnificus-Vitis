"use strict";

app.controller('FindWineCtrl', function ($scope, WineFactory, $uibModal, GoogleGeoFactory) {
  $scope.zipCode = "";

  $scope.find = (zipCode) => {
    console.log(zipCode);
    GoogleGeoFactory.convertZip(zipCode)
    .then((convertedZip) => {
      let latAndLng = {
        lat: convertedZip.results[0].geometry.location.lat,
        lng: convertedZip.results[0].geometry.location.lng
      };
      WineFactory.getLocalStores(latAndLng)
      .then((localStores) => {
        console.log(localStores);

        let modalInstance = $uibModal.open({
          templateUrl: '../partials/googleMapModal.html',
          controller: 'GoogleMapModalCtrl',
          resolve: {localStores}
        });
      });
  });
  };

});
