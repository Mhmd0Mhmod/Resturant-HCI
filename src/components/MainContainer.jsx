import { motion } from "framer-motion";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import HomContainer from "./HomeContainer";
import MenuContainer from "./MenuContainer";
import RowContainer from "./RowContainer";


function MainContainer() {
  const [scrollValue, setScrollValue] = useState(0);

  const fruitsData = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 52,
      price: 1.5,
    },
    {
      id: 2,
      name: "Banana",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 89,
      price: 0.5,
    },
    {
      id: 3,
      name: "Strawberry",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 33,
      price: 2.0,
    },
    {
      id: 3,
      name: "Strawberry",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 33,
      price: 2.0,
    },
    {
      id: 3,
      name: "Strawberry",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 33,
      price: 2.0,
    },
    {
      id: 3,
      name: "Strawberry",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 33,
      price: 2.0,
    },
    {
      id: 3,
      name: "Strawberry",
      image:
        "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg",
      calories: 33,
      price: 2.0,
    },
    
    // أضف المزيد من الفواكه حسب الحاجة
  ];

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
              onClick={() => setScrollValue((prev) => prev - 200)} // لتصغير القيم على التمرير لليسار
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.75 }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-orange-300 transition-all duration-100 ease-in-out hover:bg-orange-500 hover:shadow-lg"
              onClick={() => setScrollValue((prev) => prev + 200)} // لزيادة القيم على التمرير لليمين
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.button>
          </div>
        </div>

        <RowContainer scrollValue={scrollValue} flag={true} data={fruitsData} />
      </section>

      <MenuContainer />
    </div>
  );
}

export default MainContainer;
