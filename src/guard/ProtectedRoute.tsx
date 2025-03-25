import { Navigate, Outlet  } from "react-router-dom";
import LocalStorageUtil from "../utils/LocalStorageService";
// import DashboardLayout from "../layout/DashboardLayout";
// import Dashboard from "../pages/dashboard";

const ProtectedRoute: React.FC = () => {
    return LocalStorageUtil.get("token") ? <Outlet /> : <Navigate to="/login" replace />;
  };

export default ProtectedRoute;
