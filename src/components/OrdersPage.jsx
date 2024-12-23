import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { getOrders } from "../DB/services";
import { useSelector } from "react-redux";
import Order from "./Order";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.state);
  useEffect(() => {
    getOrders(user.id).then((data) => {
      setOrders(data);
    });
  }, [user]);
  console.log(orders);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto w-full max-w-7xl px-4"
    >
      <h1 className="mb-6 text-2xl font-semibold text-headingColor">
        My Orders
      </h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>

      {orders.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-gray-500">No orders found</p>
        </div>
      )}
    </motion.div>
  );
};

export default OrdersPage;
