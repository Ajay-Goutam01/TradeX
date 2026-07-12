import { Link } from "react-router-dom";
import { ArrowDownLeft, ArrowUpRight, ClipboardList } from "lucide-react";

import useOrders from "../hooks/useOrder";

function RecentOrderTable() {
  const { orders, loading } = useOrders();

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        Loading Orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="flex h-72 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
        <ClipboardList size={50} className="text-slate-300" />

        <h2 className="mt-5 text-xl font-bold">No Orders</h2>

        <p className="mt-2 text-slate-500">
          Your recent trades will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-bold">Recent Orders</h2>

        <Link
          to="/orders"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left">Stock</th>

            <th className="px-6 py-4 text-left">Type</th>

            <th className="px-6 py-4 text-left">Qty</th>

            <th className="px-6 py-4 text-left">Price</th>

            <th className="px-6 py-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.slice(0, 5).map((order) => (
            <tr key={order._id} className="border-t hover:bg-slate-50">
              <td className="px-6 py-5">
                <h3 className="font-semibold">{order.stock?.symbol}</h3>

                <p className="text-sm text-slate-500">
                  {order.stock?.companyName}
                </p>
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold

                  ${
                    order.transactionType === "BUY"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.transactionType === "BUY" ? (
                    <ArrowDownLeft size={14} />
                  ) : (
                    <ArrowUpRight size={14} />
                  )}

                  {order.transactionType}
                </span>
              </td>

              <td className="px-6 py-5">{order.quantity}</td>

              <td className="px-6 py-5">
                ₹{Number(order.executedPrice || order.price).toLocaleString()}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold

                  ${
                    order.status === "EXECUTED"
                      ? "bg-green-100 text-green-700"
                      : order.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrderTable;
