import React, { useEffect } from "react";

import { connect } from "react-redux";

import { clearNotificationAction } from "../actions/notification.action";

function Alert({ notification: { status, msg }, clearNotification }) {
  useEffect(() => {
    if (msg) {
      clearNotification();
    }
  }, [msg, clearNotification]);

  return msg ? (
    <div
      className={[
        "alert text-center",
        status ? "alert-success" : "alert-danger"
      ].join(" ")}
    >
      {msg}
    </div>
  ) : null;
}

const mapStateToProps = function(state) {
  return {
    notification: state.notification
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    clearNotification: () => {
      return dispatch(clearNotificationAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
