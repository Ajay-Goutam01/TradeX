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
    <section className="relative overflow-hidden flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white shadow-xl shadow-blue-900/10 lg:flex-row lg:items-center lg:justify-between">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30" />
      <div className="relative">
        <h1 className="text-4xl font-extrabold tracking-tight">
          {greeting}, <span className="text-blue-100">{user?.name}</span> 👋
        </h1>

        <p className="mt-2 text-sm text-blue-100 font-medium">Welcome back to TradeX. Practice paper trading with live market rates.</p>
      </div>

      <div className="relative flex flex-wrap gap-8 lg:gap-12">
        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-blue-200">
            Market Status
          </p>

          <h2 className="mt-2 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <span className={`inline-block h-3.5 w-3.5 rounded-full ring-4 ${
              marketStatus?.session?.toLowerCase() === "open"
                ? "bg-emerald-400 ring-emerald-500/20 animate-pulse"
                : "bg-slate-400 ring-slate-500/20"
            }`} />
            {marketStatus?.session || "Unknown"}
          </h2>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-blue-200">
            Date
          </p>

          <h2 className="mt-2 text-xl font-bold tracking-tight">
            {new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
