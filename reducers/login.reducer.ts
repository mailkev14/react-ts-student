import { LOGIN } from "../actions/login.action";

import { LoginState } from "../types/login.type";

const initialState: LoginState = {
  name: "",
  email: "",
  token: ""
};

// reducer function
export default function(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN:
      state = { ...state, ...action.payload };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
}
