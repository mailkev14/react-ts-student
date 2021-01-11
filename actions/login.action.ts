import { LoginState } from "../types/login.type";

import { loginAPI } from "../common/auth";
import { notifyError, notifySuccess } from "./notification.action";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

function login(username, password) {
  return dispatch => {
    loginAPI(username, password)
      .then(res => {
        dispatch(
          loginAction({
            name: username.split("@").shift(),
            email: username,
            token: res.data.token
          })
        );

        dispatch(notifySuccess("User validated successfully!"));
      })
      .catch(err => {
        dispatch(notifyError(err.response.data.error));
      });
  };
}

function loginAction(user: LoginState) {
  return {
    type: LOGIN,
    payload: user
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

export { LOGIN, LOGOUT, login, logout };
