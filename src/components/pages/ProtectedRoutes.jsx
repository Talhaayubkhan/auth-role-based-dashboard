import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const userData = JSON.parse(localStorage.getItem("users"));
  const authToken = localStorage.getItem("authToken");

  if (!authToken || !userData || !allowedRoles.includes(userData.role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
