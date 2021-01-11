const NOTIFICATION_SUCCESS = "NOTIFICATION_SUCCESS";
const NOTIFICATION_ERROR = "NOTIFICATION_ERROR";
const NOTIFICATION_CLEAR = "NOTIFICATION_CLEAR";

function notifySuccess(msg: string) {
  return {
    type: NOTIFICATION_SUCCESS,
    payload: msg
  };
}

function notifyError(msg: string) {
  return {
    type: NOTIFICATION_ERROR,
    payload: msg
  };
}

function clearNotification() {
  return {
    type: NOTIFICATION_CLEAR
  };
}

function clearNotificationAction() {
  return dispatch => {
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };
}

export {
  NOTIFICATION_ERROR,
  NOTIFICATION_SUCCESS,
  notifyError,
  notifySuccess,
  clearNotificationAction
};
