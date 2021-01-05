import React, { Component } from "react";
import { useContext, useEffect, useState, createContext } from "react";
import { firebaseAuth } from "./firebase";

let signup = (email: string, password: string) => {
  //return firebaseAuth.createUserWithEmailAndPassword(email, password);
};

let value = {
  authenticated: true,
  lang: "en",
  theme: "lutz-dunkel",
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
