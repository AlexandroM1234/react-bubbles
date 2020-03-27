import React, { useState } from "react";
import AxiosWithAuth from "./AxiosWithAuth";
const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("http://localhost:5000/api/login", login)
      .then(res => {
        // console.log(res.data.payload);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        props.history.push("/BubblePage");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
