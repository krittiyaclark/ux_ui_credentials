import React, { Component } from "react";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
// includes (css)
import "./Assets/css/default.min.css";
// components
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import ForgotPassword from "./components/Pages/ForgotPassword";

class App extends Component {
  render() {
    return (
      <>
      <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/ForgotPassword" component={ForgotPassword} />
      </Router>
      </>
    );
  }
}

export default App;
