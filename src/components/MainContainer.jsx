import HomContainer from "./HomeContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../DB/services";
function MainContainer() {
  const [scrollValue, setScrollValue] = useState(0);
  const { food } = useSelector((state) => state.food);
  const dispatch = useDispatch();

  useEffect(() => {
    if (food.length) return;
    dispatch(fetchFoodItems());
  }, [dispatch, food]);
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <HomContainer />

      <section className="my-6 w-full">
        <div className="flex w-full items-center justify-between">
          <p className="before:content relative from-orange-400 to-orange-600 text-2xl font-semibold capitalize text-headingColor transition-all duration-100 ease-in-out before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-32 before:rounded-lg before:bg-gradient-to-tr">
            Our fresh & healthy fruits
          </p>

          <div className="hidden items-center gap-3 md:flex">
            <motion.button
              whileTap={{ scale: 0.75 }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 hover:shadow-lg"
              onClick={() => setScrollValue((prev) => prev - 200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.75 }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-orange-300 transition-all duration-100 ease-in-out hover:bg-orange-500 hover:shadow-lg"
              onClick={() => setScrollValue((prev) => prev + 200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.button>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={food.filter((f) => f.category === "fruits")}
        />
      </section>

      <MenuContainer />
    </div>
  );
}

export default MainContainer;
