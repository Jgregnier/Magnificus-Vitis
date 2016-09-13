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
      console.log($scope.markers);
    }
  };

  $scope.close = () => {
    $uibModalInstance.close();
  };

  $scope.map = {
    center: {
      latitude: 36.1627,
      longitude: -86.7816 },
    zoom: 8
  };

  populateMarkers(stores);
});
