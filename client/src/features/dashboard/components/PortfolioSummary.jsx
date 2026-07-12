import { Wallet, Landmark, TrendingUp, Briefcase } from "lucide-react";

import usePortfolio from "../../portfolio/hooks/usePortfolio";

function Card({ title, value, icon: Icon, color }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-4 text-3xl font-bold">{value}</h2>
        </div>

        <div className={`${color} rounded-2xl p-4 text-white`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}

function PortfolioSummary() {
  const { portfolio, loading } = usePortfolio();

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-36 animate-pulse rounded-3xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  if (!portfolio) return null;

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Portfolio Summary</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Portfolio Value"
          value={`₹${portfolio.totalPortfolioValue.toLocaleString()}`}
          icon={Briefcase}
          color="bg-blue-600"
        />

        <Card
          title="Available Balance"
          value={`₹${portfolio.availableBalance.toLocaleString()}`}
          icon={Wallet}
          color="bg-green-600"
        />

        <Card
          title="Today's Profit"
          value={`₹${portfolio.todayProfit.toLocaleString()}`}
          icon={TrendingUp}
          color={portfolio.todayProfit >= 0 ? "bg-emerald-600" : "bg-red-600"}
        />

        <Card
          title="Total Investment"
          value={`₹${portfolio.totalInvestment.toLocaleString()}`}
          icon={Landmark}
          color="bg-violet-600"
        />
      </div>
    </section>
  );
}

export default PortfolioSummary;
