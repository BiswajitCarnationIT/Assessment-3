import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import DeleteRecord from "./DeleteRecord";
import UpdateRecord from "./UpdateRecord";

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
        <table id= "customers">
        <tr>
          <th>id</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {props.apiData.map((user, i) => (
          <tr>
            {user.id ? <td>{user.id}</td> : <td>--</td>}
            {user.fullname ? <td>{user.fullname}</td> : <td>--</td>}
            {user.email ? <td>{user.email}</td> : <td>--</td>}
            {user.address ? <td>{user.address}</td> : <td>--</td>}
          </tr>
        ))}
        </table>
      </div>
      {/* <input type="text"></input>
      <button>Delete record</button> */}
      <DeleteRecord />
      <UpdateRecord/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.ApiReducer.apiData,
  };
};

export default connect(mapStateToProps)(Table);
