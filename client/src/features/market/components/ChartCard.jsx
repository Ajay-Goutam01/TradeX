import { useEffect, useState } from "react";
import useMarket from "../hooks/useMarket";

import LightweightChart from "./LightweightChart";
import TimeFrameSelector from "./TImeFrameSelector";

function ChartCard({ stock }) {
  const { chart, getChart } = useMarket();

  const [range, setRange] = useState("1mo");

  useEffect(() => {
    if (!stock?.yahooSymbol) return;

    getChart(stock.yahooSymbol, "1d", range);
  }, [stock?.yahooSymbol, range]);

  console.log("Redux Chart =>", chart);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">Price Chart</h2>

        <TimeFrameSelector selected={range} onChange={setRange} />
      </div>

      <LightweightChart candles={chart} />
    </div>
  );
}

export default ChartCard;
