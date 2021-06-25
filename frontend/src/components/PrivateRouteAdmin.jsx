import React, { useContext } from "react";
import { useState } from "react";

import { Redirect, Route } from "react-router-dom";
import { UserContext, UserProvider } from "../context/UserContext";

import { getToken } from "../utils/AuthUtil";
const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const userDetails = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        userDetails.loggedIn && userDetails.role == "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRouteAdmin;
