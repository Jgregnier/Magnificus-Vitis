"use strict";

app.factory('WineFactory', function($http, $q, SnoothKey) {

  var wineResults = null;

  let getWineResults = () => {
    return wineResults;
  };

  let getWine = (WineObj) => {
    return $q((resolve, reject) => {
      $http.get(`http://api.snooth.com/wines/?akey=${SnoothKey}&q=${WineObj.wineName}&n=${WineObj.numOfResults}&t=${WineObj.typeOfDrink}&color=${WineObj.drinkColor}&s=${WineObj.sortBy}&mp=${WineObj.minPrice}&xp=${WineObj.maxPrice}&mr=${WineObj.minRating}&xr=${WineObj.maxRating}`)
      .success((wineList) => {
        console.log(wineList);
        wineResults = wineList.wines;
        resolve(wineList);
      });
    });
  };

  let getLocalStores = (zipCode) => {
    return $q((resolve, reject) => {
      $http.get(`http://api.snooth.com/stores/?akey=${SnoothKey}&c=US&z=${zipCode}`)
      .success((localStores) => {
        console.log(localStores);
        var storesArray = [];
        for(let i=0; i < 25; i++){
          storesArray.push(localStores.stores[i]);
        }
        var storesObj = {stores: storesArray};
        resolve(storesObj);
      });
    });
  };

  return {getWine, getWineResults, getLocalStores};
});
