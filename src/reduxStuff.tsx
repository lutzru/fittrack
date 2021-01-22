import { firebaseAuth } from "./firebase";
import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";

//
//  This file contains all redux related items
//  - actions
//  - reducer
//  - store
//

//
// --------------- Interfaces -----------------------------
//
export interface IGeneralState {
  message: string;
}

//
// --------------- Action definitions -----------------------------
//

const setUserAction = "set/user";
interface ISetUser {
  type: typeof setUserAction;
  payload: string;
}

export const CLoginUserAction = "login/user";
interface ILoginUser {
  type: typeof CLoginUserAction;
  payload: { useremail: string; password: string };
}

//
// --------------- Types -----------------------------
//

export type TActionTypes = ISetUser | ILoginUser;

//
// --------------- initial State -----------------------------
//

export const initialGeneralState: IGeneralState = {
  message: "Moin/Tach jau jau jau ",
};

//
// ---------------   -----------------------------
//

enum GeneralStateAction {
  SET_USER = "SET_USER",
}

type GeneralStateActions = {
  type: GeneralStateAction.SET_USER;
  payload: { user: string; role: string; token: string };
};

export function GeneralStateReducer(
  state: IGeneralState = initialGeneralState,
  action: GeneralStateActions
): IGeneralState {
  console.log("jo");
  return state;
}
