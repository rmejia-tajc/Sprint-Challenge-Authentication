import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Register from "./register/Register.js";
import Login from "./login/Login.js";
import Jokes from "./jokes/Jokes.js";


// axios defaults and interceptors
axios.defaults.baseURL = "http://localhost:3300/api";
axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem("jwt");

    return options;
  },
  function(error) {
    // do something with the error
    return Promise.reject(error);
  }
);


class App extends Component {
  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/register">Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/login">Sign In</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp; | &nbsp;
            <button onClick={this.logout}>Sign Out</button>
          </nav>
        </header>
        <section>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
        </section>
      </>
    );
  }
}

export default withRouter(App);
