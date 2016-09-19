"use strict";

app.controller('WineSearchCtrl', function ($scope, WineFactory, $location) {

  $scope.priceRange = "";

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
    setPrice();
    WineFactory.getWine($scope.WineSearchParams)
    .then ((wineList) => {
      $location.url('/wines/results');
    });
  };

  var setPrice = () => {
    var prices = $scope.priceRange.split("-");
    $scope.WineSearchParams.minPrice = prices[0];
    $scope.WineSearchParams.maxPrice = prices[1];
  };

});
