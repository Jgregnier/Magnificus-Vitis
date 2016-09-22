"use strict";

app.controller('GoogleMapModalCtrl', function ($scope, $window, localStores, $uibModalInstance, uiGmapGoogleMapApi, uiGmapIsReady) {

  var stores = localStores.stores;

  $scope.markers = [];

  $scope.windowOptions = { visibile: true };

  $scope.windowsControl = {};

  $scope.map = {
    center: {
      latitude: stores[0].lat,
      longitude: stores[0].lng
    },
    zoom: 8,
    control: {}
  };

  uiGmapIsReady.promise()
  .then(() => {
    $scope.map.control.refresh({latitude: $scope.map.center.latitude, longitude: $scope.map.center.longitude});

    let populateMarkers = (stores) => {
      console.log("stores in populate", stores);

      for(var store in stores) {
        $scope.markers.push({
          id: stores[store].id,
          latitude: stores[store].lat,
          longitude: stores[store].lng,
          name: stores[store].name,
          address: stores[store].address,
          phone: stores[store].phone,
          website: stores[store].url,
          city: stores[store].city,
          state: stores[store].state
        });
      }
    };
    populateMarkers(stores);
  });

  $scope.showStore = (instance, event, markerData) => {
    var windows = $scope.windowsControl.getPlurals();
    var windowKeys = $scope.windowsControl.getPlurals().keys();

    for(let i=0; i < 25; i++){
      windows.get(windowKeys[i]).hideWindow();
    }

    windows.get(markerData.id).showWindow();


    console.log("instance", instance, "markerData", markerData);

    $scope.windowData = {
      id: markerData.id,
      name: markerData.name,
      address: markerData.address,
      phone: markerData.phone,
      website: markerData.website,
      city: markerData.city,
      state: markerData.state
    };
    console.log("window data", $scope.windowData);

  };

  $scope.closeClick = () => {
    $scope.windowOptions.visible = false;
  };

  $scope.close = () => {
    $uibModalInstance.close();
  };

});
