function MarketCard({ title, price, change, positive }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-slate-500">{title}</p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900">{price}</h2>

      <p
        className={`mt-4 font-semibold ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </p>
    </div>
  );
}

export default MarketCard;
