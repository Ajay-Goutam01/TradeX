import { useEffect } from "react";
import { Wallet, Landmark, TrendingUp, Briefcase } from "lucide-react";

import usePortfolio from "../../portfolio/hooks/usePortfolio";

function Card({ title, value, icon: Icon, colorClass, borderClass, textClass }) {
  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-800/40 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-450 tracking-wide">{title}</p>

          <h2 className="mt-4 text-3xl font-extrabold text-white tracking-tight">{value}</h2>
        </div>

        <div className={`rounded-2xl p-4 border ${colorClass} ${borderClass} ${textClass}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}

function PortfolioSummary() {
  const { portfolio, loading, getPortfolio } = usePortfolio();

  useEffect(() => {
    getPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-3xl bg-slate-900/60 border border-slate-800"
          />
        ))}
      </div>
    );
  }

  if (!portfolio) return null;

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-white tracking-tight">Portfolio Summary</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Portfolio Value"
          value={`₹${portfolio.totalPortfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={Briefcase}
          colorClass="bg-blue-500/10"
          borderClass="border-blue-500/20"
          textClass="text-blue-450"
        />

        <Card
          title="Available Cash"
          value={`₹${portfolio.availableCash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={Wallet}
          colorClass="bg-emerald-500/10"
          borderClass="border-emerald-500/20"
          textClass="text-emerald-400"
        />

        <Card
          title="Today's Profit"
          value={`₹${portfolio.dayProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={TrendingUp}
          colorClass={portfolio.dayProfit >= 0 ? "bg-emerald-500/10" : "bg-rose-500/10"}
          borderClass={portfolio.dayProfit >= 0 ? "border-emerald-500/20" : "border-rose-500/20"}
          textClass={portfolio.dayProfit >= 0 ? "text-emerald-400" : "text-rose-400"}
        />

        <Card
          title="Total Investment"
          value={`₹${portfolio.investedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          icon={Landmark}
          colorClass="bg-violet-500/10"
          borderClass="border-violet-500/20"
          textClass="text-violet-400"
        />
      </div>
    </section>
  );
}

export default PortfolioSummary;
