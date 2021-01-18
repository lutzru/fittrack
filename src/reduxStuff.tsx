import { firebaseAuth } from "./firebase";

import { createStore } from "redux";

//
//  This file contains all redux related items
//  - actions
//  - reducer
//  - store
//

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
  message: "Moin/Tach",
  loggedin: false,
  usermail: "---",
};

/* Define Actions and its Payload */

export const addLogcodeAction = "add/logcode";
interface addLogcode {
  type: typeof addLogcodeAction;
  payload: string;
}

export const setUserAction = "set/user";
interface setUser {
  type: typeof setUserAction;
  payload: string;
}

export const loginUserAction = "login/user";
interface loginUser {
  type: typeof loginUserAction;
  payload: { useremail: string; password: string };
}

export const changeMessageAction = "change/message";
interface changeMessage {
  type: typeof changeMessageAction;
  payload: string;
}

export type ActionTypes = addLogcode | changeMessage | setUser | loginUser;

//export type ActionKinds = loginUserAction;

// Use the initialState as a default value
export function myRootReducer(state = initialState, action: ActionTypes) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions

    case loginUserAction:
      console.log(
        `Reducer Do Login: ${action.payload.useremail} ${action.payload.password} `
      );

      //
      // so geht das nicht:
      // hier kommt per Dispatch die Login Action
      // jetzt soll - auf den Serverlogin warten
      //            - wenn erfolgreich Username setzen
      //

      /*
      firebaseAuth
        .signInWithEmailAndPassword(
          action.payload.useremail,
          action.payload.password
        )
        .then(() => {
          console.log("Erfolgreich!: ");
          alert("Login erfolgreich!");

          return {
            ...state,
            loggedin: true,
            usermail: action.payload.useremail,
          };
        })
        .catch((e) => {
          alert("Fehler11:" + e);

          return {
            ...state,
            loggedin: false,
            usermail: "---",
          };
        });
        */

      return state;

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}

//
// ---------------------------------------
// Store
//
//

export const store = createStore(myRootReducer);
