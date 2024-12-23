import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../context/CartSlice";
function CartItem({ item }) {
  console.log(item);
  const { title, price, quantity, imageURL } = item;
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementQuantity(item));
  };
  const decrement = () => {
    dispatch(decrementQuantity(item));
  };
  return (
    <>
      <div className="flex w-full items-center gap-2 rounded-lg bg-cartItem p-1 px-2">
        <img
          src={imageURL}
          alt=""
          className="h-20 w-20 max-w-[60px] rounded-full object-contain"
        />
        {/* name section */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-50">{title}</p>
          <p className="block text-sm font-semibold text-gray-300">$ {price}</p>
        </div>

        {/* button section */}
        <div className="group ml-auto flex cursor-pointer items-center gap-2">
          <motion.div whileTap={{ scale: 0.75 }} onClick={decrement}>
            <BiMinus className="text-gray-50" />
          </motion.div>
          <p className="flex h-5 w-5 items-center justify-center rounded-sm bg-cartBg text-gray-50">
            {quantity}
          </p>
          <motion.div whileTap={{ scale: 0.75 }} onClick={increment}>
            <BiPlus className="text-gray-50" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default CartItem;
