"use strict";

app.factory('FirebaseFactory', function ($q, $http, FbCreds, FirebaseUrl, AuthFactory) {

  let getMyWines = () => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}wines.json?orderBy="uid"&equalTo="${AuthFactory.getUserId()}"`)
      .success((myWines) => {
        console.log(myWines);
        Object.keys(myWines).forEach((key) => {
          myWines[key].key = key;
        });
        resolve(myWines);
      });
    });
  };

  let saveWine = (newWine) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseUrl}wines.json`, JSON.stringify(newWine))
      .success((data) => {
        resolve(data);
      });
    });
  };

  let deleteWine = (wineKey) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseUrl}wines/${wineKey}.json`)
      .success((data) => {
        resolve(data);
      });
    });
  };

  let editWine = (wineKey, wineObj) => {
    return $q((resolve, reject) => {
      $http.patch(`${FirebaseUrl}wines/${wineKey}.json`, JSON.stringify(wineObj))
      .success((data) => {
        resolve(data);
      });
    });
  };

  return {
    deleteWine,
    editWine,
    getMyWines,
    saveWine
  };
});
