function SummaryCard({ title, value, color }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <p className="text-sm text-slate-500">{title}</p>

      <h2 className={`mt-4 text-3xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}

function PortfolioSummary() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Portfolio Summary</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Portfolio Value"
          value="₹10,00,000"
          color="text-slate-900"
        />

        <SummaryCard
          title="Available Funds"
          value="₹10,00,000"
          color="text-blue-600"
        />

        <SummaryCard title="Today's P&L" value="₹0" color="text-green-600" />

        <SummaryCard title="Holdings" value="0" color="text-violet-600" />
      </div>
    </section>
  );
}

export default PortfolioSummary;
