import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../features/auth/auth.store";

const ProtectedRoute = () => {
  const { token } = useAuthStore();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
