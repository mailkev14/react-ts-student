import { LoginState } from "../types/login.type";
import { NotificationState } from "../types/notification.type";

export interface AppState {
  user: LoginState;
  notification: NotificationState;
}
