import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../context/slice";
import CartItem from "./CartItem";
import { clearCart } from "../context/CartSlice";
import { checkoutOrder } from "../DB/services";
import toast from "react-hot-toast";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.state) || {};
  const { cart, total } = useSelector((state) => state.cart);
  const hanldeHideCart = () => {
    dispatch(setShowCart(false));
  };
  const hanldeClearCart = () => {
    dispatch(clearCart());
  };

  const hanldeCheckout = () => {
    if (!user) {
      toast.error("Please login to checkout");
      return;
    }
    dispatch(checkoutOrder({ cart, userId: user.id }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed right-0 top-0 z-[101] flex h-screen w-full flex-col bg-white drop-shadow-md md:w-375"
    >
      <div className="flex w-full cursor-pointer items-center justify-between p-4">
        <motion.div whileTap={{ scale: 0.75 }} onClick={hanldeHideCart}>
          <MdOutlineKeyboardBackspace className="text-3xl text-textColor" />
        </motion.div>
        <p className="text-lg font-semibold text-textColor">Cart</p>

        <motion.p
          onClick={hanldeClearCart}
          whileTap={{ scale: 0.75 }}
          className="my-2 flex cursor-pointer items-center gap-2 rounded-md bg-gray-100 p-1 px-2 text-base text-textColor hover:shadow-md"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      <div className="flex h-full w-full flex-col rounded-t-[2rem] bg-cartBg">
        {/* cart items section */}
        <div className="scrollbar-none flex w-full flex-col gap-3 overflow-y-scroll px-6 py-10 pb-32">
          {/* cart items */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          {/* cart total section */}
          <div className="flex w-full flex-1 flex-col items-center justify-evenly rounded-t-[2rem] bg-cartTotal px-8 py-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg text-gray-400">Sub Total</p>
              <p className="text-lg text-gray-400">$ {total?.toFixed(2)}</p>
            </div>
            <div className="my-2 w-full border-b border-gray-600"></div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              onClick={hanldeCheckout}
              className={`my-2 w-full rounded-full p-2 text-lg text-gray-50 hover:shadow-lg ${!cart.length || !user ? "cursor-not-allowed bg-gray-200" : "bg-orange-500"} `}
            >
              checkout
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
