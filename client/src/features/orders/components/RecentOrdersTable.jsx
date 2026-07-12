import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDownLeft, ArrowUpRight, ClipboardList } from "lucide-react";

import useOrders from "../hooks/useOrder";

function RecentOrderTable() {
  const { orders, loading, getOrders } = useOrders();

  useEffect(() => {
    if (getOrders) {
      getOrders();
    }
  }, []);

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
    <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-slate-800/80 p-6">
        <h2 className="text-xl font-extrabold text-white tracking-tight">Recent Orders</h2>

        <Link
          to="/dashboard/orders"
          className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950/30 border-b border-slate-800/60">
            <tr>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Stock</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Type</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Qty</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Price</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/40">
            {orders.slice(0, 5).map((order) => (
              <tr key={order._id} className="transition-colors hover:bg-slate-800/25">
                <td className="px-6 py-4">
                  <h3 className="font-bold text-white tracking-wide">{order.stock?.symbol?.replace(".NS", "")}</h3>

                  <p className="text-xs text-slate-400 mt-0.5">
                    {order.stock?.companyName}
                  </p>
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

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold border

                    ${
                      order.status === "EXECUTED"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : order.status === "PENDING"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/20"
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
    </div>
  );
}

export default RecentOrderTable;
