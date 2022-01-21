import React, { useState, useEffect } from "react";
import "./styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const API_URL = process.env.REACT_APP_API_URL;

function CoachesArea({ unsolvedproblems, clearAllProblems }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    //Fetch users from Heroku backend
    const res = await fetch(`${API_URL}/users`);
    const result = await res.json();
    const array = result.payload;
    setUsers(array);
  };

  //Handlechange function to manage input box state
  async function handleChange(value, e) {
    console.log(value);
    let newObject = {
      id: e.target.dataset.id,
      username: e.target.dataset.username,
      roomnumber: value,
    };
    const res = await fetch(`${API_URL}/users/${newObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObject),
    });
    const result = await res.json();
    //Refresh the page to update
    window.location.reload();
  }

  useEffect(() => {
    getUsers();
    const interval = setInterval(() => {
      getUsers();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div className="coaches-heading">
        <div></div>
        <h1 className="header-coaches">Coaches Area</h1>
        <button
          onClick={(e) => {
            clearAllProblems();
          }}
        >
          Clear Button
        </button>
      </div>
      <ul className="userlist">
        {users.map((user, index) => {
          return (
            <li
              className={user.roomnumber ? "unavailable" : "available"}
              key={user.id}
            >
              <AccountCircleIcon></AccountCircleIcon>
              {user.username} - Room # {user.roomnumber}
              <select
                className="roomSelect"
                data-username={user.username}
                data-id={user.id}
                data-roomnumber={user.roomnumber}
                value={user.roomnumber}
                onChange={(e) => handleChange(e.target.value, e)}
              >
                <option value={0}>0</option>
                {unsolvedproblems.map((problem, index) => {
                  return (
                    <option
                      key={Math.random() * 99999999}
                      value={problem.roomnumber}
                    >
                      {problem.roomnumber}
                    </option>
                  );
                })}
              </select>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CoachesArea;
