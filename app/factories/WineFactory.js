"use strict";

app.factory('WineFactory', function($http, $q, SnoothKey) {

  var wineResults = null;

  let getWineResults = () => {
      return (wineResults);
  };


  let getWine = (WineObj) => {
    return $q((resolve, reject) => {
      $http.get(`http://api.snooth.com/wines/?akey=${SnoothKey}&q=${WineObj.wineName}&n=${WineObj.numOfResults}&t=${WineObj.typeOfDrink}&color=${WineObj.drinkColor}&s=${WineObj.sortBy}&mp=${WineObj.minPrice}&xp=${WineObj.maxPrice}&mr=${WineObj.minRating}&xr=${WineObj.maxRating}`)
      .success((data) => {
        var wineList = data.wines;
        console.log(wineList);
        for(var wine in wineList) {
          if(wineList[wine].image === "") {
            wineList[wine].image = "https://image.freepik.com/free-vector/full-wine-bottle_6624.jpg";
          }
        }
        wineResults = wineList;
        resolve(wineList);
      });
    });
  };

  let getLocalStores = (latAndLng) => {
    return $q((resolve, reject) => {
      $http.get(`http://api.snooth.com/stores/?akey=${SnoothKey}&lat=${latAndLng.lat}&lng=${latAndLng.lng}`)
      .success((localStores) => {
        console.log("localStores", localStores);
        var storesArray = [];
        for(let i=0; i < 25; i++){
          storesArray.push(localStores.stores[i]);
        }
        var storesObj = {stores: storesArray};
        resolve(storesObj);
      });
    });
  };

  return {
    getLocalStores,
    getWine,
    getWineResults
  };
});
