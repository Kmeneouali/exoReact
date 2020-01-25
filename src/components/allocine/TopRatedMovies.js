import React from "react";
import Movie from "./Movie";

export default function TopRatedMovies(props) {
  return <Movie api={props.api} />;
}
