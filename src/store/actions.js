/* eslint-disable */
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { router } from "../router";

let firebaseConfig = {
  apiKey: "AIzaSyCPKc8EUT7yu0rOjlG4jkmhCZmrhVR_zwE",
  authDomain: "vuebootstrapwork.firebaseapp.com",
  databaseURL: "https://vuebootstrapwork.firebaseio.com/",
  projectId: "vuebootstrapwork"
};
firebase.initializeApp(firebaseConfig);
export const isSignedIn = ({ commit }) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      /* var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;*/
      // ...
      commit("setAuth");
    } else {
      // User is signed out.
      commit("clearAuth");
    }
  });
};

export const login = ({ commit }, payload) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      commit("setAuth");
      router.push("/");
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      // ...
    });
};
export const logout = ({ commit }) => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      commit("clearAuth");
      router.push("/login");
    })
    .catch(function(error) {
      // An error happened.
    });
};
export const register = ({}, payload) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      router.push("/login");
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
    });
};
