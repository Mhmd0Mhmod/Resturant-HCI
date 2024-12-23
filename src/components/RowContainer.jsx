import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    if (rowContainer.current) {
      rowContainer.current.scrollLeft += scrollValue;
    }
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`my-12 flex w-full items-center gap-3 scroll-smooth ${
        flag ? "scrollbar-none overflow-x-scroll" : "flex-wrap overflow-x-hidden"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="hover:scale-101 w-250 md:w-280 my-8 h-auto min-w-[250px] transform rounded-lg bg-gray-100 p-2 backdrop-blur-lg transition duration-300 ease-in-out hover:drop-shadow-lg md:min-w-[280px]"
          >
            <div className="flex w-full items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={item.image}
                alt={item.name}
                className="-mt-6 w-32 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-red-600 hover:shadow-md"
              >
                <MdShoppingBasket className="text-xs text-white" />
              </motion.div>
            </div>
            <div className="mt-2 flex w-full flex-col items-end justify-end">
              <p className="text-sm font-semibold text-textColor md:text-base">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {item.calories} Calories
              </p>
              <div className="flex items-center gap-4">
                <p className="text-base font-semibold text-headingColor">
                  <span className="text-xs text-red-500">$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
