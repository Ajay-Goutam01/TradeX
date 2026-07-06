import { TrendingUp } from "lucide-react";

function SearchItem({ stock, onClick }) {
  return (
    <button
      onClick={() => onClick(stock)}
      className="flex w-full items-center justify-between px-4 py-3 hover:bg-slate-50 transition"
    >
      <div className="flex items-center gap-3">

        <TrendingUp
          size={18}
          className="text-blue-600"
        />

        <div>

          <h3 className="font-semibold">

            {stock.name}

          </h3>

          <p className="text-xs text-slate-500">

            {stock.symbol}

          </p>

        </div>

      </div>

      <span className="text-xs text-slate-400">

        {stock.exchange}

      </span>

    </button>
  );
}

export default SearchItem;