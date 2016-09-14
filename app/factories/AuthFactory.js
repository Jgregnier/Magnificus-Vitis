'use strict';

app.factory('AuthFactory', ($q) => {

  var location = null;

  let setLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log("set user location", location);
    });
  };

  let getLocation = () => {
    console.log("getting user location", location);
    return location;
  };

  let getUserId = () => {
    return firebase.auth().currentUser.uid;
  };

  let createUser = (userObj) => {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.Message;
    });
  };

  let loginUserWithEmail = (userObj) => {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .then((userData) => {
      return $q.resolve(userData);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.Message;
      console.error(errorCode, errorMessage);
    });
  };

  let loginUserWithGoogle = function(){
    let provider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(provider)
      .then((userData) => {
        return $q.resolve(userData);
      })
      .catch(function(error){
        console.error("Login Error:", error);
    });
  };


  let logout = () => {
    console.log("logged out User");
    return firebase.auth().signOut();
  };

  let isAuthenticated = () => (firebase.auth().currentUser) ? true : false;

  return {
    createUser,
    getLocation,
    getUserId,
    isAuthenticated,
    loginUserWithEmail,
    loginUserWithGoogle,
    logout,
    setLocation
  };
});
