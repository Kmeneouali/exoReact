import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";

export default class ContentCine extends Component {
  render() {
    return (
      <Switch>
        <Route path="/AlloCine/popularMovies">
          <PopularMovies api="https://api-allocine.herokuapp.com/api/movies/popular" />
        </Route>
        <Route path="/AlloCine/upcomingMovies">
          <UpcomingMovies api="https://api-allocine.herokuapp.com/api/movies/upcoming" />
        </Route>
        <Route path="/AlloCine/topRatedMovies">
          <TopRatedMovies api="https://api-allocine.herokuapp.com/api/movies/top_rated" />
        </Route>
      </Switch>
    );
  }
}
