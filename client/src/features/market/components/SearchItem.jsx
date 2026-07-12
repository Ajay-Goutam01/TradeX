import { TrendingUp } from "lucide-react";

function SearchItem({ stock, onClick }) {
  return (
    <button
      onClick={() => onClick(stock)}
      className="flex w-full items-center justify-between px-5 py-3 hover:bg-slate-800/40 transition-colors text-slate-100 text-left"
    >
      <div className="flex items-center gap-3">
        <TrendingUp
          size={16}
          className="text-blue-500"
        />

        <div>
          <h3 className="font-semibold text-white text-sm">
            {stock.name}
          </h3>

          <p className="text-xs text-slate-400 mt-0.5">
            {stock.symbol}
          </p>
        </div>
      </div>

      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800/50 text-slate-450 border border-slate-700/30">
        {stock.exchange}
      </span>
    </button>
  );
}

export default SearchItem;