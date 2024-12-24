import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const ADMINS = import.meta.env.VITE_SUPABASE_ADMINS;

function ProtecteRoutes({ user }) {
  const { user: login } = useSelector((state) => state.state);

  const navigate = useNavigate();

  if (!login && !ADMINS.includes(user?.id) && !user) {
    navigate("/");
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
export default ProtecteRoutes;
