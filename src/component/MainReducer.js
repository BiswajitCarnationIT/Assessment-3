import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  fullname: "",
  email: "",
  address: "",
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FULLNAME_CHANGE":
      return Object.assign({}, state, { fullname: action.text });
    case "EMAIL_CHANGE":
      return Object.assign({}, state, { email: action.text });
    case "ADDRESS_CHANGE":
      return Object.assign({}, state, { address: action.text });
    default:
      return state;
  }
};

export default MainReducer;
