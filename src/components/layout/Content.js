import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ExempleGetApiByAxios from "../axiosTp/ExempleGetApiByAxios";
import Clavier from "../clavierVirtuel/Clavier";
import ToDoList from "../todolist/ToDoList";
import Converter from "../converter/Converter";
import AlloCine from "../allocine/AlloCine";
import Login from "../authentification/Login";
import ReactStripe from "../stripeTp/ReactStripe";

export default class Content extends Component {
  render() {
    return (
      <>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div>
            {/*
             */}

            <Switch>
              <Route path="/ClavierVirtuel">
                <Clavier title="Clavier Virtuel" />
              </Route>
              <Route path="/GetApiByAxio">
                <ExempleGetApiByAxios title="Axios and React" />
              </Route>
              <Route path="/ToDoList">
                <ToDoList title=" To Do List" />
              </Route>
              <Route path="/Converter">
                <Converter title=" Converter" />
              </Route>
              <Route path="/AlloCine">
                <AlloCine title=" AlloCine" />
              </Route>
              <Route path="/Stripe">
                <ReactStripe title=" Stripe" />
              </Route>
            </Switch>

            {/* <Route
                path="/ClavierVirtuel"
                render={() => <Clavier title="Clavier Virtuel" />}
              />*/}
          </div>
        </main>
      </>
    );
  }
}
