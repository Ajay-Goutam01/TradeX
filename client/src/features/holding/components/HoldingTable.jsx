import HoldingRow from "./HoldingRow";

function HoldingTable({ holdings }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Stock</th>

            <th className="px-6 py-4 text-left">Quantity</th>

            <th className="px-6 py-4 text-left">Avg Price</th>

            <th className="px-6 py-4 text-left">Invested</th>

            <th className="px-6 py-4 text-left">Current</th>

            <th className="px-6 py-4 text-left">P&L</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((holding) => (
            <HoldingRow key={holding._id} holding={holding} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoldingTable;
