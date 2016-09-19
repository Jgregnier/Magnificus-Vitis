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
    console.log(prices);

    $scope.WineSearchParams.minPrice = prices[0];
    $scope.WineSearchParams.maxPrice = prices[1];

    // if ($scope.priceRange === "0-25") {
    //   $scope.WineSearchParams.maxPrice = 25;
    //   $scope.WineSearchParams.minPrice = 0;
    // }

    // if ($scope.priceRange === "25-50") {
    //   $scope.WineSearchParams.maxPrice = 50;
    //   $scope.WineSearchParams.minPrice = 25;
    // }

    // if ($scope.priceRange === "50-75") {
    //   $scope.WineSearchParams.maxPrice = 75;
    //   $scope.WineSearchParams.minPrice = 50;
    // }

    // if ($scope.priceRange === "75-100") {
    //   $scope.WineSearchParams.maxPrice = 100;
    //   $scope.WineSearchParams.minPrice = 75;
    // }

    // if ($scope.priceRange === "+100") {
    //   $scope.WineSearchParams.maxPrice = 1000;
    //   $scope.WineSearchParams.minPrice = 100;
    // }
  };

});
