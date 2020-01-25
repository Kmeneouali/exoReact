import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./../../css/signin.css";

import Logo from "./leReacteur.jpeg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function Login() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  function handleOnchangeInput(event) {
    const id = event.target.id;
    if (id === "inputlogin") {
      setLogin(event.target.value);
    }
    if (id === "inputPassword") {
      setPassword(event.target.value);
    }
    console.log(id);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getToken();
    console.log(login, password);
  }

  const getToken = async () => {
    const response = await axios.post(
      "https://livredor-api.herokuapp.com/login",
      {
        username: "user",
        password: "pass"
      }
    );
    const token = response.data.token;
    // on garde le token dans un cookie
    const timeExpere = new Date(new Date().getTime() + 0.5 * 60 * 1000);
    Cookies.set("token", token, {
      expires: timeExpere
    });
    setToken(token);
    console.log(token);
  };

  return (
    <div>
      <form className="form-signin" onSubmit={handleSubmit}>
        <img className="mb-4" src={Logo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <input
          type="text"
          id="inputlogin"
          className="form-control"
          placeholder=" Login"
          value={login}
          onChange={handleOnchangeInput}
          required
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={handleOnchangeInput}
          required
        />
        {/* <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div> */}
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        {/* <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p> */}
      </form>
    </div>
  );
}
