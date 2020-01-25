import React, { useState, useEffect } from "react";
import Axios from "axios";
import Movie from "./Movie";
export default function PopularMovies(props) {
  return <Movie api={props.api} />;
}
