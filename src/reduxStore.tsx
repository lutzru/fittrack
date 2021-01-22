import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { GeneralStateReducer } from "./reduxStuff";

//
// --------------- Store -----------------------------
//

const rootReducer = combineReducers({
  generalState: GeneralStateReducer,
});

// @ts-ignore
// const store = createStore(rootReducer, devToolsEnhancer())
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppState = ReturnType<typeof rootReducer>;
