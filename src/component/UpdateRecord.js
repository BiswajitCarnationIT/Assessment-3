import React from "react";
import { connect } from "react-redux";
import store from "../store/store";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";


const UpdateRecord = (props) => {
  let history = useHistory();
  const handleSubmit = () => {
    console.log(props);
    const article = {
      fullname: props.fullname,
      email: props.email,
      address: props.address,
    };
    console.log("article", article);
    axios
      .put(`http://localhost:3000/user/${props.id}`, article)
      .then((response) => alert("updated"))
      .catch((error) => {
        console.error("There was an error!", error);
      });
      history.push("/table");
      
  };

  return (
    <div className="Update">
      <p>update Record</p>
      <input
        type="text"
        name="id"
        placeholder="id"
        value={props.id}
        onChange={props.idChange}
      />
      <br></br>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        defaultValue={props.fullname}  /// controled uncontroled prepolution
        onChange={props.fullNameChange}
      />
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

      {/* <NavLink exact to="/"> */}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      {/* </NavLink> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.UpdateReducer.id,
    fullname: state.UpdateReducer.fullname,
    email: state.UpdateReducer.email,
    address: state.UpdateReducer.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    idChange: (event) => {
      console.log("id changed", event.target.value);
      const action = { type: "ID_CHANGE", text: event.target.value };
      dispatch(action);
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecord);
