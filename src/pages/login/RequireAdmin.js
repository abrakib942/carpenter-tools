import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    return <Navigate to="*" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAdmin;
