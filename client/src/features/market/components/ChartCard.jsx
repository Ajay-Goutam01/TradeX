import { useEffect, useState } from "react";
import useMarket from "../hooks/useMarket";

import LightweightChart from "./LightweightChart";
import TimeFrameSelector from "./TimeFrameSelector";

function ChartCard({ stock }) {
  const { chart, getChart } = useMarket();

  const [range, setRange] = useState("1mo");

  useEffect(() => {
    if (!stock?.yahooSymbol) return;

    getChart(stock.yahooSymbol, "1d", range);
  }, [stock?.yahooSymbol, range]);

  console.log("Redux Chart =>", chart);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Price Chart</h2>

        <TimeFrameSelector selected={range} onChange={setRange} />
      </div>

      <LightweightChart candles={chart} />
    </div>
  );
}

export default ChartCard;
