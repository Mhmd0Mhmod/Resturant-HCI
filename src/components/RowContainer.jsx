import { useEffect, useRef } from "react";

import FoodItem from "./FoodItem";

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
        flag
          ? "scrollbar-none overflow-x-scroll"
          : "flex-wrap overflow-x-hidden"
      }`}
    >
      {data && data.map((item) => <FoodItem key={item.id} item={item} />)}
    </div>
  );
};

export default RowContainer;
