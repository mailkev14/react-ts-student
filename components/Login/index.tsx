import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { login as loginAction } from "../../actions/login.action";

function Login({ dispatchLogin, notification }) {
  let [touched, setTouched] = useState({
    username: undefined,
    password: undefined
  });

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [usernameError, setUsernameError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let [submitted, setSubmitted] = useState(false);

  let [formError, setFormError] = useState(true);

  const isFormValid = () => {
    const error = usernameError !== "" || passwordError !== "";

    setFormError(error);

    return error;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !submitted &&
      typeof username === "string" &&
      typeof password === "string"
    ) {
      setSubmitted(true);

      dispatchLogin(username.trim(), password);
    }
  };

  useEffect(() => {
    setUsernameError(username.trim() === "" ? "Please enter username" : "");

    if (typeof touched.username === "undefined") {
      setTouched(prevTouched => {
        return {
          ...prevTouched,
          username: false
        };
      });
    } else {
      setTouched(prevTouched => {
        return {
          ...prevTouched,
          username: true
        };
      });
    }

    // isFormValid(); // this is run in useEffect(... [usernameError, passwordError]);
  }, [username]);

  useEffect(() => {
    setPasswordError(password === "" ? "Please enter your password" : "");

    if (typeof touched.password === "undefined") {
      setTouched(prevTouched => {
        return {
          ...prevTouched,
          password: false
        };
      });
    } else {
      setTouched(prevTouched => {
        return {
          ...prevTouched,
          password: true
        };
      });
    }

    // isFormValid(); // this is run in useEffect(... [usernameError, passwordError]);
  }, [password]);

  // runs after error has been set use setUsernameError / setPasswordError
  useEffect(() => {
    isFormValid();
  }, [usernameError, passwordError]);

  // to re-enable login button in case there is an error
  useEffect(() => {
    if (notification.msg !== "") {
      setSubmitted(false);
    }
  }, [notification.msg]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h1>Please login to continue</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />

              {touched.username && usernameError !== "" && (
                <small className="text-danger">{usernameError}</small>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              {touched.password && passwordError !== "" && (
                <small className="text-danger">{passwordError}</small>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-block btn-danger"
              disabled={
                formError || submitted || !touched.username || !touched.password
              }
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogin: (username, password) => {
      dispatch(loginAction(username, password));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
