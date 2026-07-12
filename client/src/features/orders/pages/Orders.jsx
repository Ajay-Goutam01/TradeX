import { useEffect } from "react";
import { ClipboardList } from "lucide-react";

import useOrders from "../hooks/useOrder";
import OrderTable from "../components/OrderTable";

function Orders() {
  const { orders, loading, getOrders } = useOrders();

  useEffect(() => {
    getOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Orders...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>

          <p className="mt-2 text-slate-500">Buy & Sell order history.</p>
        </div>

        <div className="rounded-2xl bg-blue-50 px-5 py-3">
          <p className="text-sm text-slate-500">Total Orders</p>

          <h2 className="text-2xl font-bold text-blue-600">{orders.length}</h2>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="flex h-96 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white">
          <ClipboardList size={70} className="text-slate-300" />

          <h2 className="mt-6 text-2xl font-bold">No Orders Found</h2>

          <p className="mt-2 text-slate-500">
            Your buy & sell orders will appear here.
          </p>
        </div>
      ) : (
        <OrderTable orders={orders} />
      )}
    </div>
  );
}

export default Orders;
