import React from "react";
import { connect } from "react-redux";
import store from "../store/store";
import axios from "axios";
import Navlink from "./Navlink";

const Form = (props) => {
  const handleSubmit = () => {
    //alert(props.fullName)
    const article = {
      fullname: props.fullName,
      email: props.email,
      address: props.address,
    };
    console.log(article);
    axios
      .post("http://localhost:3000/user", article)
      .then()
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        value={props.fullName}
        onChange={props.fullNameChange}
      />
      <p>{props.fullName}</p>
      <br></br>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={props.emailChange}
      />
      <br></br>
      <input
        type="text"
        name="address"
        placeholder="Full Address"
        value={props.address}
        onChange={props.addressChange}
      />
      <br></br>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <Navlink />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fullName: state.MainReducer.fullName,
    email: state.MainReducer.email,
    address: state.MainReducer.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fullNameChange: (event) => {
      console.log("full changed", event.target.value);
      const action = { type: "FULLNAME_CHANGE", text: event.target.value };
      dispatch(action);
    },
    emailChange: (event) => {
      console.log("email changed", event.target.value);
      const action = { type: "EMAIL_CHANGE", text: event.target.value };
      dispatch(action);
    },
    addressChange: (event) => {
      console.log("address changed", event.target.value);
      const action = { type: "ADDRESS_CHANGE", text: event.target.value };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
