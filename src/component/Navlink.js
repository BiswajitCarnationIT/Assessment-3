import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Navlink = () => {
  let data;
  const handleFetch = () => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        data = response.data;
        console.log(data);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };
  return (
    <div>
      <NavLink exact to="/table">
        <button onClick={handleFetch}>click here</button>
      </NavLink>
    </div>
  );
};

export default Navlink;
