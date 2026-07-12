import { useState } from "react";

import BuySellModal from "./BuySellModal";
import useTrade from "../../orders/hooks/useTrade";

function BuySellCard({ stock }) {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  const { buy, sell } = useTrade();

  return (
    <>
      <div className="sticky top-[96px] rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md">
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-white tracking-tight">Trade</h2>

          <p className="mt-1 text-sm text-slate-400 font-medium">
            Place your paper trading order
          </p>
        </div>

        <div className="mb-6 rounded-2xl bg-slate-950/40 border border-slate-800/80 p-5">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-450">Current Price</span>

            <span className="font-extrabold text-white">
              ₹{Number(stock.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="mt-3.5 flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-450">Symbol</span>

            <span className="font-bold text-slate-200">{stock.symbol?.replace(".NS", "")}</span>
          </div>

          <div className="mt-3.5 flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-450">Exchange</span>

            <span className="font-bold text-slate-200">{stock.exchange}</span>
          </div>
        </div>

        <button
          onClick={() => setBuyOpen(true)}
          className="mb-4 w-full rounded-xl bg-emerald-600 py-4.5 font-extrabold text-sm tracking-wider text-white shadow-lg shadow-emerald-500/10 transition-all duration-205 hover:bg-emerald-500 hover:shadow-emerald-500/25 hover:-translate-y-0.5 cursor-pointer"
        >
          BUY
        </button>

        <button
          onClick={() => setSellOpen(true)}
          className="w-full rounded-xl bg-rose-600 py-4.5 font-extrabold text-sm tracking-wider text-white shadow-lg shadow-rose-500/10 transition-all duration-205 hover:bg-rose-500 hover:shadow-rose-500/25 hover:-translate-y-0.5 cursor-pointer"
        >
          SELL
        </button>
      </div>

      {/* BUY */}

      <BuySellModal
        open={buyOpen}
        onClose={() => setBuyOpen(false)}
        type="BUY"
        stock={stock}
        onSubmit={async (quantity) => {
          return await buy({
            stockId: stock._id,
            quantity,
          });
        }}
      />

      {/* SELL */}

      <BuySellModal
        open={sellOpen}
        onClose={() => setSellOpen(false)}
        type="SELL"
        stock={stock}
        onSubmit={async (quantity) => {
          return await sell({
            stockId: stock._id,
            quantity,
          });
        }}
      />
    </>
  );
}

export default BuySellCard;
