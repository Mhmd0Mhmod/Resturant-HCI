import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const ADMINS = import.meta.env.VITE_SUPABASE_ADMINS;

function ProtecteRoutes({ children }) {
  const { user } = useSelector((state) => state.state);

  const navigate = useNavigate();

  if (!user && !ADMINS.includes(user?.id)) {
    navigate("/");
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
export default ProtecteRoutes;
