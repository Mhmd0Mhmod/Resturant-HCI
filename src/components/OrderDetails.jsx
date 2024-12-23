import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getOrder, removeOrder } from "../DB/services";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const { user } = useSelector((state) => state.state);
  const navigate = useNavigate();
  useEffect(() => {
    getOrder(id, user.id).then((data) => {
      setOrder(data);
    });
  }, [id, user]);
  function deleteOrder() {
    removeOrder(id, user.id).then(() => {
      navigate("/orders");
      toast.success("Order Deleted Successfully");
    });
  }
  const { order: cartItems, totalPrice } = order || {};

  return (
    <motion.section
      className="flex w-full flex-col items-start justify-center gap-8 bg-gray-100 p-8 md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex-1 space-y-4 rounded-lg bg-white p-4 shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-2xl font-bold text-headingColor">
          Order Details
        </h2>
        {cartItems?.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b py-4 pr-4 shadow-md"
            whileHover={{ scale: 1.014 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.imageURL}
                alt={item.title}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-headingColor">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-orange-500">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* القسم الثاني: حذف الطلب */}
      <motion.div
        className="w-full rounded-lg bg-white p-6 shadow-lg md:w-1/3"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-xl font-semibold text-headingColor">
          Summary
        </h2>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-700">Total Items:</p>
          <p className="text-lg font-bold">{cartItems?.length}</p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-700">Total Amount:</p>
          <p className="text-lg font-bold text-orange-500">
            ${totalPrice?.toFixed(2)}
          </p>
        </div>
        <button
          className="w-full rounded-lg bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600"
          onClick={deleteOrder}
        >
          Delete Order
        </button>
      </motion.div>
    </motion.section>
  );
};

export default OrderDetails;
