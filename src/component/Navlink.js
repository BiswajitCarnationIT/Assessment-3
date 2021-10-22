import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

let data;
const Navlink = (props) => {
  
  const handleFetch = () => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        data = response.data;
        console.log(data);
        //props.apiData = data
        props.handleFetchToRedux()
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };
  return (
    <div>
      <NavLink exact to="/table">
        <button  type="button" onClick={handleFetch}>click here to see all data</button>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        apiData : state.ApiReducer.apiData
    }
}

const mapDispatchToProps = (dispatch) => {
  console.log('hi',data)
    return {
        handleFetchToRedux:() => dispatch({ type: 'API_FETCH' ,data})
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navlink);
