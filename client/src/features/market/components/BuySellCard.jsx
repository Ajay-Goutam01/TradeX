import { useState } from "react";

import BuySellModal from "./BuySellModal";
import useTrade from "../../orders/hooks/useTrade";

function BuySellCard({ stock }) {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  const { buy, sell } = useTrade();

  return (
    <>
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Trade</h2>

          <p className="mt-1 text-sm text-slate-500">
            Place your paper trading order
          </p>
        </div>

        <div className="mb-6 rounded-2xl bg-slate-50 p-5">
          <div className="flex justify-between">
            <span className="text-slate-500">Current Price</span>

            <span className="font-bold">
              ₹{Number(stock.price).toLocaleString()}
            </span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="text-slate-500">Symbol</span>

            <span className="font-semibold">{stock.symbol}</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="text-slate-500">Exchange</span>

            <span className="font-semibold">{stock.exchange}</span>
          </div>
        </div>

        <button
          onClick={() => setBuyOpen(true)}
          className="mb-4 w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          BUY
        </button>

        <button
          onClick={() => setSellOpen(true)}
          className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
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
