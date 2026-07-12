import { TrendingUp, TrendingDown } from "lucide-react";

function Item({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>

      <h3 className="mt-2 text-lg font-bold text-slate-900">{value}</h3>
    </div>
  );
}

function PriceCard({ stock }) {
  const positive = stock.change >= 0;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Current Price</p>

          <h1 className="mt-2 text-4xl font-bold">
            ₹{Number(stock.price).toLocaleString()}
          </h1>

          <div
            className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold

            ${
              positive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {stock.change?.toFixed(2)} ({stock.changePercent?.toFixed(2)}%)
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500">Exchange</p>

          <h3 className="mt-2 text-xl font-semibold">{stock.exchange}</h3>

          <p className="mt-2 text-sm text-slate-500">{stock.marketState}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <Item label="Open" value={`₹${stock.open}`} />

        <Item label="High" value={`₹${stock.high}`} />

        <Item label="Low" value={`₹${stock.low}`} />

        <Item label="Previous Close" value={`₹${stock.previousClose}`} />
      </div>
    </section>
  );
}

export default PriceCard;
