"use strict";

app.controller('WineListCtrl', function ($scope, WineFactory, FirebaseFactory, $uibModal) {

  $scope.wineResults = WineFactory.getWineResults();

  $scope.open = (wine) => {
    let modalInstance = $uibModal.open({
      templateUrl: '../partials/wineListModal.html',
      controller: 'WineListModalCtrl',
      resolve: {wine}
    });

    console.log("open this wine in a modal",
      wine.name,
      wine.varietal,
      wine.vintage,
      wine.region,
      wine.price,
      wine.snoothrank
      );
  };

});
