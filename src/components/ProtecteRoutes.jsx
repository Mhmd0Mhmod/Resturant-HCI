import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const ADMINS = import.meta.env.VITE_SUPABASE_ADMINS;

function ProtecteRoutes({ user }) {
  const { user: login } = useSelector((state) => state.state);

  const navigate = useNavigate();
  useEffect(() => {
    if (!login?.id && (ADMINS.includes(login?.id) || !user)) {
      navigate("/");
    }
  }, [login, navigate, user]);

  if (login) return <Outlet />;
}
export default ProtecteRoutes;
