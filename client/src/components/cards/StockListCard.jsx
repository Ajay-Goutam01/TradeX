import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function StockListCard({ title, stocks = [] }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b p-5">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>

        <ChevronRight className="cursor-pointer text-slate-400" size={20} />
      </div>

      <div>
        {stocks.length === 0 ? (
          <div className="p-6 text-center text-slate-500">No Data</div>
        ) : (
          stocks.map((stock) => (
            <button
              key={stock.symbol}
              onClick={() => navigate(`/dashboard/market/${stock.symbol}`)}
              className="flex w-full items-center justify-between border-b p-4 transition hover:bg-slate-50 last:border-none"
            >
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">
                  {stock.symbol.replace(".NS", "")}
                </h3>

                <p className="text-xs text-slate-500">{stock.name}</p>
              </div>

              <div className="text-right">
                <h3 className="font-semibold">₹ {stock.price}</h3>

                <p
                  className={`text-sm font-semibold ${
                    stock.changePercent >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stock.changePercent?.toFixed(2)}%
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default StockListCard;
