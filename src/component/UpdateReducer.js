const initialState = {
  id: "",
  fullname: "",
  email: "",
  address: "",
};

const MainReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "ID_CHANGE":
      return Object.assign({}, state, { id: action.text });
    case "FULLNAME_CHANGE":
      return Object.assign({}, state, { fullname: action.text }); //newobj existingState changeObject
    case "EMAIL_CHANGE":
      return Object.assign({}, state, { email: action.text });
    case "ADDRESS_CHANGE":
      return Object.assign({}, state, { address: action.text });
    default:
      return state;
  }
};

export default MainReducer;
