function Card({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>

      <h2 className="mt-3 text-xl font-bold">{value}</h2>
    </div>
  );
}

function StatsGrid({ stock }) {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold">Statistics</h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Market Cap" value={stock.marketCap?.toLocaleString()} />

        <Card title="Volume" value={stock.volume?.toLocaleString()} />

        <Card title="Currency" value={stock.currency} />

        <Card title="Symbol" value={stock.symbol} />
      </div>
    </section>
  );
}

export default StatsGrid;
