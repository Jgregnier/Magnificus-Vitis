"use strict";

app.factory('GoogleGeoFactory', function ($q, $http, GoogleGeoKey) {

  let convertZip = (zipCode) => {
    return $q((resolve, reject) => {
      $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${GoogleGeoKey}`)
    .success((convertedZip) => {
      console.log(convertedZip);
      resolve(convertedZip);
    });
    });
  };

  return {convertZip};
});
