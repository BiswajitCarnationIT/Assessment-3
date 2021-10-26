import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DeleteRecord = () => {
  const [id, setId] = useState(0);
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/user/${id}`).then(() => {
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
        <NavLink exact to="/">
          <button
            className="btn btn-success"
            type="button"
            onClick={handleDelete}
          >
            Delete record
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DeleteRecord;
