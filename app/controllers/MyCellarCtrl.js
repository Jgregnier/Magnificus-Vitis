"use strict";

app.controller('MyCellarCtrl', function($scope, $location, FirebaseFactory, WineFactory) {

  FirebaseFactory.getMyWines()
  .then((MyWines) => {
    console.log("MyWines", MyWines);
    $scope.wines = MyWines;
  });

  $scope.deleteWine = (key) => {
    console.log("deleteing Wine", key);
    FirebaseFactory.deleteWine(key)
    .then((data) => {
      FirebaseFactory.getMyWines()
      .then((MyWines) => {
        $scope.wines = MyWines;
      });
    });
  };

  $scope.findWine = () => {
    WineFactory.getLocalStores();
  };

});
