import React from "react";
import { Navigate } from "react-router-dom";
// import useAuth from "../hook/useAuth";

//fake useAuth hook
const useAuth = () => {
  return {
    auth: {
      roles: ["admin"],
    },
  };
};

const ProtectedRoute = ({ children, activeRoles }) => {
  const { auth } = useAuth();
  const roles = auth?.roles ? auth.roles : [];
  const hasAccess = roles.some((role) => activeRoles.includes(role));
  return hasAccess ? children : <Navigate to="/authentication/login" replace />;
};

export default ProtectedRoute;
