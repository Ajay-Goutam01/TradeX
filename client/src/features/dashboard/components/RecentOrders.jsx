import { ClipboardList } from "lucide-react";

function RecentOrders() {
  return (
    <section className="rounded-3xl border bg-white shadow-sm">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">Recent Orders</h2>
      </div>

      <div className="flex h-72 flex-col items-center justify-center">
        <ClipboardList size={50} className="text-slate-300" />

        <h3 className="mt-6 text-xl font-semibold">No Orders Found</h3>

        <p className="mt-2 text-slate-500">
          Paper trading orders will appear here.
        </p>
      </div>
    </section>
  );
}

export default RecentOrders;
