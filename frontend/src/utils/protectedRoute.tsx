import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { checkAuthenticated } from "../api/authentication";
import NavigationBar from "../components/navigation/navigationBar";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await checkAuthenticated();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? (
    <>
      {<NavigationBar />}
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
