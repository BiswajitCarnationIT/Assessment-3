import React from "react";
import { connect } from "react-redux";
import store from "../store/store";
import axios from "axios";
import Navlink from "./Navlink";
import { useHistory } from "react-router-dom";
import { ADDRESS_CHANGE, API_FETCH, EMAIL_CHANGE, FULLNAME_CHANGE } from "./Actions";

const Form = (props) => {
  let history = useHistory();

  const handleSubmit = () => {
    if (!validite()) {
      alert("please put correct data");
    } else {
      const article = {
        fullname: props.fullname ? props.fullname : "",
        email: props.email ? props.email : "",
        address: props.address ? props.address : "",
      };
      axios
        .post("http://localhost:3000/user", article)
        .then(() => {
          alert("Submitted");
        })
        .catch((error) => {});

      axios
        .get("http://localhost:3000/user")
        .then((response) => {
          const data = response.data;
          props.handleFetchToRedux(data);
        })
        .catch((error) => {});
      history.push("/table");
    }
  };
  const validite = () => {
    let formIsValid = true;
    if (typeof props.email === "undefined") {
      formIsValid = false;
    }
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (typeof props.email !== "undefined") {
      if (!pattern.test(props.email)) {
        formIsValid = false;
      }
    }

    if (typeof props.fullname === "undefined") {
      formIsValid = false;
    }
    if (typeof props.fullname !== "undefined") {
      if (
        !props.fullname.match(/^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/)
      ) {
        formIsValid = false;
      }
    }
    return formIsValid;
  };
  return (
    <div>
      <div className="MainForm">
        <p>Submit new data</p>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={props.fullname ? props.fullname : null}
          onChange={props.fullNameChange ? props.fullNameChange : null}
        />
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.email ? props.email : null}
          onChange={props.emailChange ? props.emailChange : null}
        />
        <br></br>
        <input
          type="text"
          name="address"
          placeholder="Full Address"
          value={props.address ? props.address : null}
          onChange={props.addressChange ? props.addressChange : null}
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
    fullname: state.MainReducer.fullname?state.MainReducer.fullname:"",
    email: state.MainReducer.email?state.MainReducer.email:"",
    address: state.MainReducer.address?state.MainReducer.address:"",
    apiData: state.ApiReducer.apiData?state.ApiReducer.apiData:"",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fullNameChange: (event) => {
      const action = { type: FULLNAME_CHANGE , text: event.target.value };
      dispatch(action);
    },
    emailChange: (event) => {
      const action = { type: EMAIL_CHANGE, text: event.target.value };
      dispatch(action);
    },
    addressChange: (event) => {
      const action = { type: ADDRESS_CHANGE, text: event.target.value };
      dispatch(action);
    },
    handleFetchToRedux: (data) => dispatch({ type: API_FETCH, data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
