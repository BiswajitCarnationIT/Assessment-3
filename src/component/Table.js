import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import DeleteRecord from "./DeleteRecord";
import UpdateRecord from "./UpdateRecord";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { API_FETCH, TO_BE_UPDATED } from "./Actions";

const Table = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        const data = response.data;
        props.handleFetchToRedux(data);
      })
      .catch((error) => {
      });
  }, []);
  let history = useHistory();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`).then(() => {
      alert("deleted");
    });
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        const data = response.data;
        props.handleFetchToRedux(data);
      })
      .catch((error) => {
      });
    history.push("/table");
  };

  const handleUpdate = (user) => {
    props.handleToBeUpdated(user);
  };
  return (
    <div>
      <div>
        <table id="customers">
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {props.apiData.map((user, i) => (
            <tr>
              {user.id ? <td>{user.id}</td> : <td>--</td>}
              {user.fullname ? <td>{user.fullname}</td> : <td>--</td>}
              {user.email ? <td>{user.email}</td> : <td>--</td>}
              {user.address ? <td>{user.address}</td> : <td>--</td>}
              {
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              }
              {
                <td>
                  <button onClick={() => handleUpdate(user)}>Update</button>
                </td>
              }
            </tr>
          ))}
        </table>
      </div>

      <UpdateRecord />
      <NavLink exact to="/">
        <button type="button">Go back</button>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state?.ApiReducer?.apiData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchToRedux: (data) => dispatch({ type: API_FETCH, data }),
    handleToBeUpdated: (data) => dispatch({ type: TO_BE_UPDATED, data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
