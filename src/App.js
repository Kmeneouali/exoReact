import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import Content from "./components/layout/Content";
import Cookies from "js-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/authentification/Login";
function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  console.log(token);
  // if (token !== null) {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="container-fluid">
          <div className="row">
            {/* Menu */}

            <Menu />

            {/* Content */}
            <Content />
          </div>
        </div>
      </Router>
    </div>
  );
  // } else {
  //   return <Login />;
  // }
}

export default App;
