import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartContainer = () => {
  return (
    <div className="fixed right-0 top-0 z-[101] flex h-screen w-full flex-col bg-white drop-shadow-md md:w-375">
      <div className="flex w-full cursor-pointer items-center justify-between p-4">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-3xl text-textColor" />
        </motion.div>
        <p className="text-lg font-semibold text-textColor">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="my-2 flex cursor-pointer items-center gap-2 rounded-md bg-gray-100 p-1 px-2 text-base text-textColor hover:shadow-md"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      <div className="flex h-full w-full flex-col rounded-t-[2rem] bg-cartBg">
        {/* cart items section */}
        <div className="md:h-42 scrollbar-none flex h-340 w-full flex-col gap-3 overflow-y-scroll px-6 py-10">
          {/* cart item */}
          <div className="flex w-full items-center gap-2 rounded-lg bg-cartItem p-1 px-2">
            <img
              src="https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg"
              alt=""
              className="h-20 w-20 max-w-[60px] rounded-full object-contain"
            />
            {/* name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Chocolate and vanila</p>
              <p className="block text-sm font-semibold text-gray-300">$8.5</p>
            </div>

            {/* button section */}
            <div className="group ml-auto flex cursor-pointer items-center gap-2">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>
              <p className="flex h-5 w-5 items-center justify-center rounded-sm bg-cartBg text-gray-50">
                {" "}
                1{" "}
              </p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>

          {/* cart total section */}
          <div className="flex w-full flex-1 flex-col items-center justify-evenly rounded-t-[2rem] bg-cartTotal px-8 py-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg text-gray-400">Sub Total</p>
              <p className="text-lg text-gray-400">$ 8.6</p>
            </div>
            <div className="my-2 w-full border-b border-gray-600"></div>
            <div className="flex w-full items-center justify-between">
              <p className="text-lg text-gray-400">Delivery</p>
              <p className="text-lg text-gray-400">$ 8.6</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="my-2 w-full rounded-full bg-orange-500 p-2 text-lg text-gray-50 transition-all duration-150 ease-out hover:shadow-lg"
            >
              checkout
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
