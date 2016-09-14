"use strict";

app.controller('GoogleMapModalCtrl', function ($scope, localStores, $uibModalInstance, uiGmapGoogleMapApi) {
  var stores = localStores.stores;

  $scope.markers = [];

  let populateMarkers = (stores) => {
    console.log(stores);
    for(var store in stores) {
      $scope.markers.push({
        id: stores[store].id,
        latitude: stores[store].lat,
        longitude: stores[store].lng
      });
    }
      console.log($scope.markers);
  };

  $scope.close = () => {
    $scope.markers = [];
    stores = [];
    $uibModalInstance.close();
  };

  $scope.map = {
    center: {
      latitude: stores[0].lat,
      longitude: stores[0].lng
    },
    zoom: 8
  };

  $scope.showStore = () => {

  };

  populateMarkers(stores);
});
