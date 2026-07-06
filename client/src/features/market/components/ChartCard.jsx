function ChartCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">Price Chart</h2>
      </div>

      <div className="flex h-[500px] items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold">TradingView Chart</h3>

          <p className="mt-2 text-slate-500">
            TradingView integration will be added in the next sprint.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChartCard;
