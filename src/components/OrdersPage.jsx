import { motion } from "motion/react";
import { useState } from "react";

const OrdersPage = () => {
  // Helper functions for calculations
  const calculateTotalItems = (order_items) => {
    return order_items.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = (order_items) => {
    return order_items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    );
  };

  const [orders, setOrders] = useState([
    // Fake data for testing
    {
      id: "123456",
      created_at: new Date().toISOString(),
      status: "Completed",
      order_items: [
        {
          id: 1,
          quantity: 3,
          product: {
            title: "Chicken Kebab",
            price: 225,
            imageURL: "src/imgs/c2.png",
          },
        },
        {
          id: 2,
          quantity: 2,
          product: {
            title: "Chicken Kebab",
            price: 225,
            imageURL: "src/imgs/c2.png",
          },
        },
      ],
    },
    {
      id: "164567",
      created_at: new Date().toISOString(),
      status: "pending",
      order_items: [
        {
          id: 1,
          quantity: 2,
          product: {
            title: "Chicken Kebab",
            price: 100,
            imageURL: "src/imgs/c3.png",
          },
        },
        {
          id: 2,
          quantity: 5,
          product: {
            title: "Chicken",
            price: 225,
            imageURL: "src/imgs/c2.png",
          },
        },
      ],
    },
  ]);

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
          <div
            key={order.id}
            className="rounded-lg bg-cardOverlay p-6 shadow-md"
          >
            {/* Order Header */}
            <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h2 className="text-lg font-medium text-headingColor">
                  Order #{order.id}
                </h2>
                <p className="text-sm text-gray-500">
                  Date: {new Date(order.created_at).toLocaleDateString()}
                </p>
                <span
                  className={`mt-2 inline-block rounded-full px-2 py-1 text-xs ${
                    order.status === "pending"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-green-100 text-green-700" // completed orders
                  } `}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 text-left md:mt-0 md:text-right">
                <p className="text-lg font-medium text-headingColor">
                  Total: ${calculateTotalAmount(order.order_items).toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  Items: {calculateTotalItems(order.order_items)}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-4">
              {order.order_items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center rounded-lg bg-primary p-4"
                >
                  <div className="h-24 w-24 flex-shrink-0">
                    <img
                      src={item.product.imageURL}
                      alt={item.product.title}
                      className="h-full w-full rounded-md object-contain"
                    />
                  </div>
                  <div className="ml-6 flex flex-grow flex-col">
                    <h3 className="text-lg font-medium text-headingColor">
                      {item.product.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-gray-500">
                        Quantity: {item.quantity}
                      </span>
                      <span className="font-medium text-headingColor">
                        ${(item.quantity * item.product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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