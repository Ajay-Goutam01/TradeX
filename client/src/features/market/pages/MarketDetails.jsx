import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

import useMarket from "../hooks/useMarket";

import StockHeader from "../components/StockHeader";
import PriceCard from "../components/PriceCard";
import ChartCard from "../components/ChartCard";
import StatsGrid from "../components/StatsGrid";
import AboutCompany from "../components/AboutCompany";
import BuySellCard from "../components/BuySellCard";

function MarketDetails() {
  const { symbol } = useParams();

  const { stock, loading, getStock } = useMarket();

  useEffect(() => {
    if (symbol) {
      getStock(symbol);
    }
  }, [symbol]);

  if (loading) {
    return (
      <div className="flex h-[75vh] flex-col items-center justify-center gap-4">
        <LoaderCircle className="animate-spin text-blue-600" size={45} />

        <p className="text-lg font-medium text-slate-500">
          Loading Market Details...
        </p>
      </div>
    );
  }

  if (!stock) {
    return (
      <div className="flex h-[75vh] flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Stock Not Found</h2>

        <p className="mt-3 text-slate-500">Please search another stock.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <StockHeader stock={stock} />

      <div className="grid gap-8 xl:grid-cols-12">
        {/* Left Section */}

        <div className="space-y-8 xl:col-span-8">
          <PriceCard stock={stock} />

          <ChartCard stock={stock} />

          <StatsGrid stock={stock} />

          <AboutCompany stock={stock} />
        </div>

        {/* Right Section */}

        <div className="xl:col-span-4">
          <BuySellCard stock={stock} />
        </div>
      </div>
    </div>
  );
}

export default MarketDetails;
