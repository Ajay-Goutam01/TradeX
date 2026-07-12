import { TrendingDown, TrendingUp } from "lucide-react";

function HoldingRow({ holding }) {
  const currentValue = holding.currentValue ?? holding.currentMarketValue ?? 0;

  const profit = holding.totalProfit ?? currentValue - holding.investedAmount;

  const positive = profit >= 0;

  return (
    <tr className="transition-colors hover:bg-slate-800/25">
      <td className="px-6 py-4">
        <h3 className="font-bold text-white tracking-wide">
          {holding.stock.companyName || holding.stock.displayName}
        </h3>

        <p className="text-xs text-slate-400 mt-0.5">{holding.stock.symbol?.replace(".NS", "")}</p>
      </td>

      <td className="px-6 py-4 text-sm font-semibold text-slate-200">{holding.quantity}</td>

      <td className="px-6 py-4 text-sm font-semibold text-slate-350">
        ₹{Number(holding.averagePrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>

      <td className="px-6 py-4 text-sm font-bold text-white">
        ₹{Number(holding.investedAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>

      <td className="px-6 py-4 text-sm font-bold text-white">
        ₹{Number(currentValue).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </td>

      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold rounded-full px-2.5 py-0.5 border ${
            positive
              ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              : "text-rose-400 bg-rose-500/10 border-rose-500/20"
          }`}
        >
          <span className="flex items-center gap-1">
            {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            ₹{Number(profit).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </span>
      </td>
    </tr>
  );
}

export default HoldingRow;
