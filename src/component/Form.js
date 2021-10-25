import React from "react";
import { connect } from "react-redux";
import store from "../store/store";
import axios from "axios";
import Navlink from "./Navlink";
import { useHistory } from "react-router-dom";

let data;
const Form = (props) => {
  let history = useHistory();

  // function handleClick() {
  //   history.push("/home");
  // }
  const handleSubmit = () => {
    //alert(props.fullName)
    const article = {
      fullname: props.fullname,
      email: props.email,
      address: props.address,
    };
    console.log(article);
    axios
      .post("http://localhost:3000/user", article)
      .then(() => {
        alert("Submitted");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    //this.history.push("/")  r-r-d

    //*** */
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        data = response.data;
        console.log(data);
        //props.apiData = data
        props.handleFetchToRedux();
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
    history.push("/table");
  };
  return (
    <div>
      <div className="MainForm">
        <p>Submit new data</p>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={props.fullname}
          onChange={props.fullNameChange}
        />
        <p>{props.fullname}</p>
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
      </div>
      <Navlink />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fullname: state.MainReducer.fullname,
    email: state.MainReducer.email,
    address: state.MainReducer.address,
    apiData: state.ApiReducer.apiData,
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
    handleFetchToRedux: () => dispatch({ type: "API_FETCH", data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
