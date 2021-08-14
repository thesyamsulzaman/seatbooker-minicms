import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

function PrivateRoute({ component: Component, isAuthenticated, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!isAuthenticated) {
          return <Redirect to="/users/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps)(PrivateRoute);
