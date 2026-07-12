import { TrendingDown, TrendingUp } from "lucide-react";

function HoldingRow({ holding }) {
  const currentValue = holding.currentValue ?? holding.currentMarketValue ?? 0;

  const profit = holding.totalProfit ?? currentValue - holding.investedAmount;

  const positive = profit >= 0;

  return (
    <tr className="border-t transition hover:bg-slate-50">
      <td className="px-6 py-5">
        <h3 className="font-semibold">
          {holding.stock.companyName || holding.stock.displayName}
        </h3>

        <p className="text-sm text-slate-500">{holding.stock.symbol}</p>
      </td>

      <td className="px-6 py-5">{holding.quantity}</td>

      <td className="px-6 py-5">
        ₹{Number(holding.averagePrice).toLocaleString()}
      </td>

      <td className="px-6 py-5 font-semibold">
        ₹{Number(holding.investedAmount).toLocaleString()}
      </td>

      <td className="px-6 py-5 font-semibold">
        ₹{Number(currentValue).toLocaleString()}
      </td>

      <td
        className={`px-6 py-5 font-semibold ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        <div className="flex items-center gap-2">
          {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}₹
          {Number(profit).toLocaleString()}
        </div>
      </td>
    </tr>
  );
}

export default HoldingRow;
