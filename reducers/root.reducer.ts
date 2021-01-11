import { combineReducers } from "redux";

import { AppState } from "../types/app.state";

import LoginReducer from "./login.reducer";
import NotificationReducer from "./notification.reducer";

export default combineReducers<AppState>({
  user: LoginReducer,
  notification: NotificationReducer
});
