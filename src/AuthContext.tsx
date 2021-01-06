import React, { Component } from "react";
import { useContext, useEffect, useState, createContext } from "react";
import { firebaseAuth } from "./firebase";

let signup = async (email: string, password: string) => {
  console.log("Try Signup with: " + email + " " + password);
  await firebaseAuth.createUserWithEmailAndPassword(email, password);
};

let login = async (email: string, password: string) => {
  console.log("Try Login with: " + email + " " + password);
  await firebaseAuth.signInWithEmailAndPassword(email, password);

  // user
};

let value = {
  authenticated: true,
  lang: "en",
  theme: "lutz-dunkel",
  signup: signup,
  login: login,
};

//
// React Context erzeugen
//
// - was sich wenig ändert, global erreichbar, nicht Statemanagement
// - alternativ alles in Redux
// - login, per dispatch an Redux
// - im Reducer, Actionen auslösen (Serverlogik nicht in der GuiComponent)
// - Reducer gut testbar
// - Gui Component, keine Logik einfügen
//
// - Context eher für: Theme,Sprache
//   (Dinge die nur einmal da sind, und wenig geändert werden.)
//   Theme im Context, was ausgewählt, z.B. dark im State
//
const AuthContext = React.createContext(value);

//
// Provider aus dem React context holen
//
const AuthProvider = AuthContext.Provider;

//
// hier den Context per Hook erreichbar machen
// kein Tag in index mit Provider.. nötig
//
export default function useAuth() {
  return useContext(AuthContext);
}
