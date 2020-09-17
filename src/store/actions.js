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
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      commit("setAuth");
    } else {
      commit("clearAuth");
    }
  });
};

export const login = ({ commit, state }, payload) => {
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

export const addUser = ({}) => {
  let db = firebase.database;
  db.ref("vuebootstrapwork").set({ username: "sss", email: "sss@sss.com" });
};
