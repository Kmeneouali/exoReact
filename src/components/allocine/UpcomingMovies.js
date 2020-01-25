import React from "react";
import Movie from "./Movie";

export default function UpcomingMovies(props) {
  return <Movie api={props.api} />;
}
