import { NotificationState } from "../types/notification.type";

import {
  NOTIFICATION_ERROR,
  NOTIFICATION_SUCCESS
} from "../actions/notification.action";

const initialState: NotificationState = {
  status: false,
  msg: ""
};

export default function(state: NotificationState = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_ERROR:
      return {
        ...state,
        status: false,
        msg: action.payload
      };
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        status: true,
        msg: action.payload
      };
    default:
      state = { ...initialState };
  }

  return state;
}
