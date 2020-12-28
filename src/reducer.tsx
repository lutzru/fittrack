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
};

/* Define Actions and its Payload */

export const addLogcode = "add/logcode";
interface addLogcode {
  type: typeof addLogcode;
  payload: string;
}

export const changeMessage = "change/message";
interface changeMessage {
  type: typeof changeMessage;
  payload: string;
}

export type ActionTypes = addLogcode | changeMessage;

// Use the initialState as a default value
export default function appReducer(state = initialState, action: ActionTypes) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
