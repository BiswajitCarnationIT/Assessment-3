import React from "react";
import { connect } from "react-redux";
import store from "../store/store";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const UpdateRecord = (props) => {
  let history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        const data = response.data;
        console.log("useeffect called")
        props.handleFetchToRedux(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  const handleSubmit = () => {
    const article = {
      fullname: props.fullname,
      email: props.email,
      address: props.address,
    };
    axios
      .put(`http://localhost:3000/user/${props.id}`, article)
      .then((response) => alert("updated"))
      .catch((error) => {
        console.error("There was an error!", error);
      });

    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        const data = response.data;
        props.handleFetchToRedux(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    history.push("/table");
  };

  return (
    <div className="Update">
      <p>Update Record</p>
      <div class="col-6">
        <div class="input-group">
          <span class="input-group-text">id</span>
          <input
            type="text"
            name="id"
            class="form-control"
            placeholder="id"
            value={props.id}
            onChange={props.idChange}
          />
        </div>
      </div>

      <br></br>
      <div class="col-6">
        <div class="input-group">
          <span class="input-group-text">Name</span>
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Full name"
            defaultValue={props.fullname}
            onChange={props.fullNameChange}
          />
        </div>
      </div>

      <br></br>
      <div class="col-6">
        <div class="input-group">
          <span class="input-group-text">Email</span>
          <input
            type="text"
            name="email"
            class="form-control"
            placeholder="Email"
            value={props.email}
            onChange={props.emailChange}
          />
        </div>
      </div>

      <br></br>
      <div class="col-6">
        <div class="input-group">
          <span class="input-group-text">Address</span>
          <input
            type="text"
            name="address"
            class="form-control"
            placeholder="Full Address"
            value={props.address}
            onChange={props.addressChange}
          />
        </div>
      </div>

      <br></br>
      <div class="col-6">
        <button
          class="form-control col-6 btn btn-success text-light"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
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
      const action = { type: "ID_CHANGE", text: event.target.value };
      dispatch(action);
    },
    fullNameChange: (event) => {
      const action = { type: "FULLNAME_CHANGE", text: event.target.value };
      dispatch(action);
    },
    emailChange: (event) => {
      const action = { type: "EMAIL_CHANGE", text: event.target.value };
      dispatch(action);
    },
    addressChange: (event) => {
      const action = { type: "ADDRESS_CHANGE", text: event.target.value };
      dispatch(action);
    },
    handleFetchToRedux: (data) => dispatch({ type: "API_FETCH", data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecord);
