import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Alert from "./common/Alert";
import Login from "./components/Login";
import User from "./components/User";

import "bootstrap/dist/css/bootstrap.min.css";

function App({ user }) {
  return (
    <React.Fragment>
      <Alert />
      <BrowserRouter>
        <Switch>
          {user ? (
            <React.Fragment>
              <Route to="/user" component={User} />
              <Redirect from="/login" to="/user" />
              <Redirect from="/" to="/user" />
            </React.Fragment>
          ) : (
            <Route to="/login" component={Login} />
          )}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user.email
  };
}

export default connect(mapStateToProps)(React.memo(App));
