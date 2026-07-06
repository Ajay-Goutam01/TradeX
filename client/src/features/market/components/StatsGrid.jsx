const stats = (stock) => [
  {
    label: "Open",
    value: stock?.open,
  },

  {
    label: "High",
    value: stock?.high,
  },

  {
    label: "Low",
    value: stock?.low,
  },

  {
    label: "Previous Close",
    value: stock?.previousClose,
  },

  {
    label: "Volume",
    value: stock?.volume,
  },

  {
    label: "Market Cap",
    value: stock?.marketCap,
  },
];

function StatsGrid({ stock }) {
  if (!stock) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stats(stock).map((item) => (
        <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{item.label}</p>

          <h3 className="mt-2 text-2xl font-bold">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;
