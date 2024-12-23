import { Outlet } from "react-router-dom";
import { CartContainer, Header } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCart } from "./context/CartSlice";

function AppLayout() {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.state);
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartStorage) {
      dispatch(setCart(cartStorage));
    }
  }, [dispatch]);
  return (
    <div className="flex h-auto flex-col bg-primary">
      <Header />
      <main className="mt-14 w-full px-4 py-4 md:mt-20 md:px-16">
        <Outlet />
      </main>
      {showCart && <CartContainer />}
    </div>
  );
}
export default AppLayout;
