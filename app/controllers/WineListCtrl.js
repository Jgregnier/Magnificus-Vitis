"use strict";

app.controller('WineListCtrl', function ($scope, WineFactory, FirebaseFactory, $uibModal) {

  $scope.wineResults = WineFactory.getWineResults();

  var newWine = {
    PersonalComment: "Add a personalComment here",
    PersonalRating: "Add a PersonalRating here",
    uid: "Some UID"
  };

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
