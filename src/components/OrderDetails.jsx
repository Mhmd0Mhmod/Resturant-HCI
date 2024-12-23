import React from "react";
import { motion } from "framer-motion";

const OrderDetails = () => {
  // بيانات الطلب مع صور
  const cartItems = [
    { id: 1, name: "Strawberries", qty: 2, price: 10.25, image: "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg" },
    { id: 2, name: "Chicken Kebab", qty: 3, price: 8.25, image: "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg" },
    { id: 3, name: "Fish Kebab", qty: 1, price: 5.25, image: "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg" },
    { id: 4, name: "Ice Cream", qty: 4, price: 5.99, image: "https://www.spiritedandthensome.com/wp-content/uploads/2024/03/The-Worlds-Best-Chocolate-Coffee-Square-650-9248.jpg" },
  ];

  // دالة لحساب الإجمالي
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <motion.section
      className="flex flex-col md:flex-row items-start justify-center w-full p-8 bg-gray-100 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* القسم الأول: تفاصيل المنتجات */}
      <motion.div
        className="flex-1 bg-white rounded-lg shadow-lg p-4 space-y-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-headingColor mb-4">Order Details</h2>
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center gap-4 border-b pb-4 justify-between"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-headingColor">{item.name}</h3>
                <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-orange-500">
              Total: ${(item.price * item.qty).toFixed(2)}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* القسم الثاني: حذف الطلب */}
      <motion.div
        className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-headingColor mb-4">Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-700">Total Items:</p>
          <p className="text-lg font-bold">{cartItems.length}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-700">Total Amount:</p>
          <p className="text-lg font-bold text-orange-500">${calculateTotal()}</p>
        </div>
        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
          onClick={() => alert("Order Deleted")}
        >
          Delete Order
        </button>
      </motion.div>
    </motion.section>
  );
};

export default OrderDetails;
