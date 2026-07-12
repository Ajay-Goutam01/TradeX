import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function StockListCard({ title, stocks = [] }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-slate-800/80 p-5">
        <h2 className="text-xl font-extrabold text-white">{title}</h2>

        <ChevronRight className="cursor-pointer text-slate-400 transition-transform hover:translate-x-1" size={20} />
      </div>

      <div className="divide-y divide-slate-800/50">
        {stocks.length === 0 ? (
          <div className="p-6 text-center text-sm text-slate-500">No Data</div>
        ) : (
          stocks.map((stock) => (
            <button
              key={stock.symbol}
              onClick={() => navigate(`/dashboard/market/${stock.symbol}`)}
              className="flex w-full items-center justify-between p-5 text-slate-100 transition-colors hover:bg-slate-800/30"
            >
              <div className="text-left">
                <h3 className="font-semibold text-white tracking-wide">
                  {stock.symbol.replace(".NS", "")}
                </h3>

                <p className="text-xs text-slate-400 mt-1">{stock.name}</p>
              </div>

              <div className="text-right">
                <h3 className="font-bold text-white">₹{stock.price}</h3>

                <p
                  className={`text-sm font-semibold mt-1 ${
                    stock.changePercent >= 0 ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent?.toFixed(2)}%
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default StockListCard;
