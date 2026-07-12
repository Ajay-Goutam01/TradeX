import useAuth from "../../auth/hooks/useAuth";
import useMarket from "../../market/hooks/useMarket";

function DashboardHeader() {
  const { user } = useAuth();
  const { marketStatus } = useMarket();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section className="flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          {greeting},<span className="ml-2">{user?.name}</span>
          👋
        </h1>

        <p className="mt-3 text-blue-100">Welcome back to StockTrade</p>
      </div>

      <div className="flex gap-10">

<div>

<p className="text-blue-100">

Market Status

</p>

<h2 className="mt-2 text-3xl font-bold">

{marketStatus?.session ?? "Loading..."}

</h2>

</div>

<div>

<p className="text-blue-100">

Date

</p>

<h2 className="mt-2 text-xl font-semibold">

{new Date().toLocaleDateString()}

</h2>

</div>

</div>
    </section>
  );
}

export default DashboardHeader;
