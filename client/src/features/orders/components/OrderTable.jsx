import {
  ArrowDownLeft,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import useOrders from "../hooks/useOrder";

function StatusBadge({ status }) {
  switch (status) {
    case "COMPLETED":
    case "EXECUTED":
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          <CheckCircle2 size={14} />
          {status}
        </span>
      );

    case "PENDING":
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
          <Clock3 size={14} />
          {status}
        </span>
      );

    default:
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          <XCircle size={14} />
          {status}
        </span>
      );
  }
}

function OrderTable() {
  const { orders, loading } = useOrders();

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
        Loading Orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h2 className="text-2xl font-bold">No Orders Found</h2>

        <p className="mt-3 text-slate-500">
          Place your first trade to see orders here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr className="text-left">
            <th className="px-6 py-4">Stock</th>

            <th className="px-6 py-4">Type</th>

            <th className="px-6 py-4">Quantity</th>

            <th className="px-6 py-4">Price</th>

            <th className="px-6 py-4">Total</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="border-t transition hover:bg-slate-50"
            >
              <td className="px-6 py-5">
                <h3 className="font-semibold">
                  {order.stock?.companyName || order.stock?.displayName}
                </h3>

                <p className="text-sm text-slate-500">{order.stock?.symbol}</p>
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold

                  ${
                    order.transactionType === "BUY"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.transactionType === "BUY" ? (
                    <ArrowDownLeft size={15} />
                  ) : (
                    <ArrowUpRight size={15} />
                  )}

                  {order.transactionType}
                </span>
              </td>

              <td className="px-6 py-5 font-semibold">{order.quantity}</td>

              <td className="px-6 py-5">
                ₹{Number(order.executedPrice || order.price).toLocaleString()}
              </td>

              <td className="px-6 py-5 font-bold">
                ₹
                {(
                  (order.executedPrice || order.price) * order.quantity
                ).toLocaleString()}
              </td>

              <td className="px-6 py-5">
                <StatusBadge status={order.status} />
              </td>

              <td className="px-6 py-5 text-sm text-slate-500">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
