import React from "react";
import { Navigate } from "react-router-dom";
import { checkAuthenticated } from "../api/authentication";

const withAuthentication = (Component: JSX.Element) => {
  let authenticated;
  checkAuthenticated().then((data) => {
    authenticated = data;
  });
  return authenticated ? Component : <Navigate to="/login" replace />;
};

export default withAuthentication;
