import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMarket from "../hooks/useMarket";

import StockHeader from "../components/StockHeader";
import PriceCard from "../components/PriceCard";
import ChartCard from "../components/ChartCard";
import StatsGrid from "../components/StatsGrid";
import AboutCompany from "../components/AboutCompany";

function MarketDetails() {
  const { symbol } = useParams();

  const {
    getQuote,

    getHistory,

    selectedStock,

    loading,
  } = useMarket();

  useEffect(() => {
    getQuote(symbol);

    getHistory(symbol, "1d", "1mo");
  }, [symbol]);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center">
        Loading Stock...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <StockHeader stock={selectedStock} />

      <PriceCard stock={selectedStock} />

      <ChartCard />

      <StatsGrid stock={selectedStock} />

      <AboutCompany stock={selectedStock} />
    </div>
  );
}

export default MarketDetails;
