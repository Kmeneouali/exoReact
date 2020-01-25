import React, { Component } from "react";
import "./../../css/allocine.css";
import HeaderAlloCine from "./HeaderAlloCine";
import Movie from "./Movie";
import MenuAlloCine from "./MenuAlloCine";
import ContentCine from "./ContentCine";
export default class AlloCine extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">
            <span role="img" aria-label="Camera">
              🎥
            </span>
            {this.props.title}
          </h1>
        </div>

        <HeaderAlloCine />
        <MenuAlloCine />
        <ContentCine />

        {/* <Movie /> */}
      </>
    );
  }
}
