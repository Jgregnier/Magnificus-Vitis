"use strict";

app.controller('WineListCtrl', function ($scope, WineFactory, FirebaseFactory) {

  $scope.wineResults = WineFactory.getWineResults();

  var newWine = {
    PersonalComment: "Add a personalComment here",
    PersonalRating: "Add a PersonalRating here",
    uid: "Some UID"
  };

  $scope.saveWine = (WineId) => {
    newWine.WineId = WineId;
    FirebaseFactory.saveWine(newWine);
  };

  $scope.findWine = () => {
    console.log("lol");
  };

});
