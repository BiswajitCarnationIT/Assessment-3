import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Table = () => {
      let data
    useEffect(() => {
      axios
        .get("http://localhost:3000/user")
        .then((response) => {
          data = response.data;
          console.log(data)
        })
        .catch((error) => {
          this.setState({ errorMessage: error.message });
          console.error("There was an error!", error);
        });
    });
//   let data;
//   const handleFetch = () => {
//     axios
//       .get("http://localhost:3000/user")
//       .then((response) => {
//         data = response.data;
//         console.log(data);
//       })
//       .catch((error) => {
//         this.setState({ errorMessage: error.message });
//         console.error("There was an error!", error);
//       });
//   };
  return (
    <div>
      <button > fetch data</button>
      <div>{data?<p>hi</p>:<p>no</p>}</div>
    </div>
  );
};

export default Table;
