import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, handleLogout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.token ? (
          <Component {...props} handleLogout={handleLogout} />
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
};

export default ProtectedRoute;
