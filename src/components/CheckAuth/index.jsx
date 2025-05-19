import { useAuth } from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const CheckAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children;
}