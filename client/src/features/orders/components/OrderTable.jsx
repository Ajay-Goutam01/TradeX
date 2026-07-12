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
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
          <CheckCircle2 size={13} />
          {status}
        </span>
      );

    case "PENDING":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-400">
          <Clock3 size={13} />
          {status}
        </span>
      );

    default:
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/15 border border-rose-500/20 px-2.5 py-0.5 text-xs font-bold text-rose-400">
          <XCircle size={13} />
          {status}
        </span>
      );
  }
}

function OrderTable() {
  const { orders, loading } = useOrders();

  if (loading) {
    return (
      <div className="rounded-3xl bg-slate-900/40 border border-slate-800 p-12 text-center text-slate-400 shadow-xl backdrop-blur-md">
        Loading Orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 p-12 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-white tracking-tight">No Orders Found</h2>

        <p className="mt-2 text-sm text-slate-500">
          Place your first trade to see orders here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-xl backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950/30 border-b border-slate-800/60">
            <tr className="text-left">
              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Stock</th>

              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Type</th>

              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Quantity</th>

              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Price</th>

              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Total</th>

              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Status</th>

              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/40">
            {orders.map((order) => (
              <tr
                key={order._id}
                className="transition-colors hover:bg-slate-800/25"
              >
                <td className="px-6 py-4">
                  <h3 className="font-bold text-white tracking-wide">
                    {order.stock?.companyName || order.stock?.displayName}
                  </h3>

                  <p className="text-xs text-slate-400 mt-0.5">{order.stock?.symbol?.replace(".NS", "")}</p>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold border

                    ${
                      order.transactionType === "BUY"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    }`}
                  >
                    {order.transactionType === "BUY" ? (
                      <ArrowDownLeft size={13} />
                    ) : (
                      <ArrowUpRight size={13} />
                    )}

                    {order.transactionType}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm font-semibold text-slate-200">{order.quantity}</td>

                <td className="px-6 py-4 text-sm font-bold text-white">
                  ₹{Number(order.executedPrice || order.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>

                <td className="px-6 py-4 text-sm font-bold text-white">
                  ₹
                  {(
                    (order.executedPrice || order.price) * order.quantity
                  ).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={order.status} />
                </td>

                <td className="px-6 py-4 text-xs font-medium text-slate-400">
                  {new Date(order.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;
