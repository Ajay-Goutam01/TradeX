import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useWatchlist from "../../watchlist/hooks/useWatchlist";

function StockHeader({ stock }) {
  const navigate = useNavigate();

  const { add } = useWatchlist();

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-slate-800 p-3 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
          </button>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {stock.companyName || stock.name}
              </h1>

              <button
                onClick={() => add(stock._id)}
                className="rounded-full p-2 transition hover:bg-yellow-500/10"
              >
                <Star size={18} className="text-yellow-500 fill-yellow-500" />
              </button>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <span className="rounded-full bg-slate-850 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-800/80">
                {stock.symbol?.replace(".NS", "")}
              </span>

              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
                {stock.exchange}
              </span>

              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 border border-violet-500/20">
                {stock.instrumentType || "EQUITY"}
              </span>
            </div>
          </div>
        </div>

        <div className="text-left lg:text-right">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            ₹{Number(stock.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>

          <p
            className={`mt-1 text-lg font-bold ${
              stock.change >= 0 ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {stock.change >= 0 ? "+" : ""}
            {stock.change?.toFixed(2)} ({stock.changePercent?.toFixed(2)}%)
          </p>
        </div>
      </div>
    </section>
  );
}

export default StockHeader;
