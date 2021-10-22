import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
//import handleFetch from "./handleFetch";

const DeleteRecord = () => {
  const [id, setId] = useState(0);
  const handleChange = (event) => {
    //console.log(event.target.value)
    setId(event.target.value);
  };
  //console.log("if",id);
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/user/${id}`).then(() => {
      //handleFetch()
      console.log("deleted");
      alert("deleted");
    });
  };
  return (
    <div>
      <div className="delete">
        <p>Delete record</p>
        <input
          name="id"
          type="text"
          placeholder="Type Id to delete"
          onChange={handleChange}
        ></input>
        {/* <button onClick={handleDelete}>Delete record</button> */}
        <NavLink exact to="/">
          <button  type="button" onClick={handleDelete}>Delete record</button>
        </NavLink>
      </div>
    </div>
  );
};

const handleFetch = () => {};

export default DeleteRecord;
