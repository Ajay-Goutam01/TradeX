import { TrendingUp, TrendingDown } from "lucide-react";

function Item({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-950/40 border border-slate-800/80 p-4">
      <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">{label}</p>

      <h3 className="mt-2 text-lg font-extrabold text-white">{value}</h3>
    </div>
  );
}

function PriceCard({ stock }) {
  const positive = stock.change >= 0;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-450 tracking-wide">Current Price</p>

          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight">
            ₹{Number(stock.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h1>

          <div
            className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold border

            ${
              positive
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : "bg-rose-500/10 text-rose-400 border-rose-500/20"
            }`}
          >
            {positive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {stock.change >= 0 ? "+" : ""}{stock.change?.toFixed(2)} ({stock.changePercent?.toFixed(2)}%)
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Exchange</p>

          <h3 className="mt-2 text-xl font-bold text-white tracking-wide">{stock.exchange}</h3>

          <p className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{stock.marketState}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Item label="Open" value={`₹${stock.open}`} />

        <Item label="High" value={`₹${stock.high}`} />

        <Item label="Low" value={`₹${stock.low}`} />

        <Item label="Previous Close" value={`₹${stock.previousClose}`} />
      </div>
    </section>
  );
}

export default PriceCard;
