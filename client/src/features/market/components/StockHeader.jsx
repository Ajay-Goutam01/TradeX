import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useWatchlist from "../../watchlist/hooks/useWatchlist";

function StockHeader({ stock }) {
  const navigate = useNavigate();

  const { add } = useWatchlist();

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate(-1)}
            className="rounded-2xl border p-3 hover:bg-slate-100"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">
                {stock.companyName || stock.name}
              </h1>

              <button
                onClick={() => add(stock._id)}
                className="rounded-full p-2 transition hover:bg-yellow-100"
              >
                <Star size={20} className="text-yellow-500" />
              </button>
            </div>

            <div className="mt-2 flex gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                {stock.symbol}
              </span>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {stock.exchange}
              </span>

              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">
                {stock.instrumentType || "EQUITY"}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-4xl font-bold">
            ₹{Number(stock.price).toLocaleString()}
          </h2>

          <p
            className={`mt-2 text-lg font-semibold ${
              stock.change >= 0 ? "text-green-600" : "text-red-600"
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
