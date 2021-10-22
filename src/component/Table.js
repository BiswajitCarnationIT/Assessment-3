import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";

const Table = (props) => {
  //console.log("Props", props.apiData[2].fullname);
  return (
    <div>
      {/* <button> fetch data</button> */}
      {/* <div>{props.apiData?<p>hi</p>:<p>no</p>}</div> */}
      <div>
        {/* {props.apiData.map((user,i) =>
          user.fullname ? <div>{user.fullname}</div> : <div>---</div>
        )} */}
        <tr>
            <td>Full Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        {props.apiData.map((user, i) => (
          <tr>
            {user.fullname ? <td>{user.fullname}</td> : <td>--</td>}
            {user.email ? <td>{user.email}</td> : <td>--</td>}
            {user.address ? <td>{user.address}</td> : <td>--</td>}
          </tr>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.ApiReducer.apiData,
  };
};

export default connect(mapStateToProps)(Table);
