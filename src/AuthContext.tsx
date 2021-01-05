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
const TodosContext = React.createContext(value);

//
// Provider aus dem React context holen
//
const TodosProvider = TodosContext.Provider;

//
// eigene Komponente erzeugen, die den Context.Provider benutzt, und Kinder/children einbindet
// unter value zentrale Werte einsetzen
//
class FirebaseAuthContext extends Component {
  render() {
    return <TodosProvider value={value}>{this.props.children}</TodosProvider>;
  }
}

//
// hier den Context per Hook erreichbar machen
//
export default function useAuth() {
  return useContext(TodosContext);
}

export { TodosContext, FirebaseAuthContext };
