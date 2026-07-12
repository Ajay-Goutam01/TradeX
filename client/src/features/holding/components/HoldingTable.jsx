import HoldingRow from "./HoldingRow";

function HoldingTable({ holdings }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-xl backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950/30 border-b border-slate-800/60">
            <tr>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Stock</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Quantity</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Avg Price</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Invested</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Current</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">P&L</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/40">
            {holdings.map((holding) => (
              <HoldingRow key={holding._id} holding={holding} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HoldingTable;
