import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

type PublicRouteProps = {
  children: React.ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Navigate to={"/profile"} />;
  } else {
    return <>{children}</>;
  }
};
