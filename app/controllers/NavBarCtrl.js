"use strict";

app.controller("NavBarCtrl", function($scope, $location) {

  $scope.navLinks = [
    {url: "#/logout", name: "Logout"},
    {url: "#/login", name: "Login"},
    {url: "#/mycellar", name: "My Cellar"},
    {url: "#/wines/search", name: "Search For Wine"},
    {url: "#/wines/find", name: "Find Wine"}
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
