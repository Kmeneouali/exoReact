import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Menu extends Component {
  render() {
    const Items = [
      "ClavierVirtuel",
      "GetApiByAxio",
      "Converter",
      "ToDoList",
      "AlloCine",
      "Stripe"
    ];
    return (
      <>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              {Items.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    {/* <a className="nav-link" href={"/" + item}>
                        {item}
                      </a> */}
                    <Link className="nav-link" to={"/" + item}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
