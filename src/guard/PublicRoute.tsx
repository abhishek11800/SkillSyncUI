import { Navigate, Outlet } from "react-router-dom";
import LocalStorageUtil from "../utils/LocalStorageService";

const PublicRoute: React.FC = () => {
  const isAuthenticated = LocalStorageUtil.get("token");

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
