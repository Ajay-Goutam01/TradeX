function MarketCard({ title, price, change, positive }) {
  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-800/40 hover:shadow-2xl hover:shadow-slate-950/30">
      <p className="text-sm font-medium text-slate-400">{title}</p>

      <h2 className="mt-3 text-3xl font-extrabold text-white tracking-tight">{price}</h2>

      <p
        className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold rounded-full px-2.5 py-0.5 border ${
          positive
            ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
            : "text-rose-400 bg-rose-500/10 border-rose-500/20"
        }`}
      >
        <span>{positive ? "▲" : "▼"}</span>
        <span>{change}</span>
      </p>
    </div>
  );
}

export default MarketCard;
