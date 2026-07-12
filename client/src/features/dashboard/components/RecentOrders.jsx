import RecentOrdersTable from "../../orders/components/RecentOrdersTable";

function RecentOrders() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-white">Recent Orders</h2>

      <RecentOrdersTable />
    </section>
  );
}

export default RecentOrders;
