import React from "react";
import {connect } from 'react-redux'
import store from "../store/store";

const Form = (props) => {
  return (
    <div>
      <input type="text" name="name" placeholder="Full name" value = {props.fullName} onChange={props.fullNameChange}/>
      <p>{props.fullName}</p>
      <br></br>
      <input type="text" name="email" placeholder="Email" />
      <br></br>
      <input type="text" name="address" placeholder="Full Address" />
      <br></br>
      <button type="button">Submit</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fullName : state.fullName
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fullNameChange: (event) => {
      console.log('changed',event.target.value)
      const action = {type:'FULLNAME_CHANGE',text:event.target.value};
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Form);
