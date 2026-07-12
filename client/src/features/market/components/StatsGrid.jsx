function Card({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-xl backdrop-blur-md">
      <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">{title}</p>

      <h2 className="mt-3 text-lg font-extrabold text-white tracking-tight">{value}</h2>
    </div>
  );
}

function StatsGrid({ stock }) {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-white tracking-tight">Statistics</h2>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Card title="Market Cap" value={stock.marketCap ? `₹${stock.marketCap.toLocaleString()}` : "N/A"} />

        <Card title="Volume" value={stock.volume?.toLocaleString() || "0"} />

        <Card title="Currency" value={stock.currency || "INR"} />

        <Card title="Symbol" value={stock.symbol?.replace(".NS", "")} />
      </div>
    </section>
  );
}

export default StatsGrid;
