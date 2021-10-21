import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  fullName: "",
  email: "",
  address: "",
};

const MainReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "FULLNAME_CHANGE":
      return Object.assign({}, state, { fullName: action.text }); //newobj existingState changeObject
    case "EMAIL_CHANGE":
      return Object.assign({}, state, { email: action.text });
    case "ADDRESS_CHANGE":
      return Object.assign({}, state, { address: action.text });
    default:
      return state;
  }
};

export default MainReducer;
