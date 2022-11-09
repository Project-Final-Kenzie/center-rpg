import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";
const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  
  if (loading) {
    return <p>Caregando</p>;
  }
  return user ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedRoutes;
