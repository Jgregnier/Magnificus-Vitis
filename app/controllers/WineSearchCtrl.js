"use strict";

app.controller('WineSearchCtrl', function ($scope, WineFactory, $location) {

  $scope.WineSearchParams = {
    wineName: "",
    numOfResults: "",
    typeOfDrink: 'wine',
    drinkColor: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
    maxRating: "5",
    sortBy: ""
  };

  $scope.searchWine = () => {
    WineFactory.getWine($scope.WineSearchParams)
    .then ((wineList) => {
      $location.url('/wines/results');
    });
  };
});
