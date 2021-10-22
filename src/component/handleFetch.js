import React from 'react'
import axios from "axios";
import { connect } from "react-redux";

let data
const handleFetch = (props) => {
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
const mapDispatchToProps = (dispatch) => {
    console.log('hi',data)
      return {
          handleFetchToRedux:() => dispatch({ type: 'API_FETCH' ,data})
          }
  }

export default connect(mapDispatchToProps)(handleFetch)
