import { Link } from "react-router-dom";

function Order({ order }) {
  const { id, created_at, status, order: orderItems, totalPrice } = order;
  return (
    <Link to={`${id}`} className="block">
      <div className="rounded-lg bg-cardOverlay p-6 shadow-md hover:shadow-xl">
        {/* Order Header */}
        <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-medium text-headingColor">
              Order #{order.id}
            </h2>
            <p className="text-sm text-gray-500">
              Date: {new Date(created_at).toLocaleDateString()}
            </p>
            <span
              className={`mt-2 inline-block rounded-full px-2 py-1 text-xs ${
                order.status === "pending"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700" // completed orders
              } `}
            >
              {status}
            </span>
          </div>
          <div className="mt-4 text-left md:mt-0 md:text-right">
            <p className="text-lg font-medium text-headingColor">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Items: {orderItems.length}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Order;
