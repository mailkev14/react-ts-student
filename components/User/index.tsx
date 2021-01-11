import React from "react";
import { connect } from "react-redux";

function User({ user: { name, email } }) {
  return <div>Welcome {name}</div>;
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {}

export default connect(
  mapStateToProps,
  null
)(React.memo(User));
