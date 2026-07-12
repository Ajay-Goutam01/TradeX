import { useEffect } from "react";
import { PieChart } from "lucide-react";

import usePortfolio from "../hooks/usePortfolio";

import PortfolioSummary from "../../dashboard/components/PortfolioSummary";
import HoldingTable from "../../holding/components/HoldingTable";

function Portfolio() {
  const { portfolio, loading, getPortfolio } = usePortfolio();

  useEffect(() => {
    getPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Portfolio...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Portfolio</h1>

        <p className="mt-2 text-slate-500">Overview of your investments.</p>
      </div>

      <PortfolioSummary />

      {!portfolio?.holdings?.length ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed bg-white">
          <PieChart size={70} className="text-slate-300" />

          <h2 className="mt-6 text-2xl font-bold">No Holdings</h2>

          <p className="mt-2 text-slate-500">
            Buy a stock to build your portfolio.
          </p>
        </div>
      ) : (
        <HoldingTable holdings={portfolio.holdings} />
      )}
    </div>
  );
}

export default Portfolio;
