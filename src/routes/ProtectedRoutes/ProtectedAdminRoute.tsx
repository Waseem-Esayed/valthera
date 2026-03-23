import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default ProtectedAdminRoute;
