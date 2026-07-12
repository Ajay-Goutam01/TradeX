import { useEffect, useState } from "react";
import { X } from "lucide-react";

function BuySellModal({ open, onClose, type, stock, onSubmit }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setQuantity(1);
      setLoading(false);
    }
  }, [open]);

  if (!open || !stock) return null;

  const estimated = quantity * (stock.price || 0);

  const handleSubmit = async () => {
    if (loading) return;

    if (quantity < 1) return;

    try {
      setLoading(true);

      const success = await onSubmit(quantity);

      if (success) {
        onClose();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800/80 p-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              {type === "BUY" ? "Buy Stock" : "Sell Stock"}
            </h2>

            <p className="mt-1 text-xs font-semibold text-slate-400">{stock.companyName}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          <div className="rounded-2xl bg-slate-950/40 border border-slate-800/60 p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-450">Symbol</span>

              <span className="font-bold text-slate-200">{stock.symbol?.replace(".NS", "")}</span>
            </div>

            <div className="mt-3.5 flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-450">Current Price</span>

              <span className="font-extrabold text-white">
                ₹{Number(stock.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-350">Quantity</label>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-xl border border-slate-800 bg-slate-950/40 p-3 text-white outline-none transition duration-200 focus:border-blue-500/85 focus:bg-slate-950/60"
            />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-400">Total Estimated Amount</span>

              <span className="text-xl font-extrabold text-white tracking-tight">
                ₹
                {estimated.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex gap-3 border-t border-slate-800/80 p-6 bg-slate-950/10">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-xl border border-slate-800 bg-slate-900/40 py-3.5 font-bold text-sm text-slate-300 transition duration-200 hover:bg-slate-800 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`flex-1 rounded-xl py-3.5 font-bold text-sm tracking-wide text-white transition duration-200 cursor-pointer

            ${
              type === "BUY"
                ? "bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/10"
                : "bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-500/10"
            }

            ${loading && "cursor-not-allowed opacity-60"}
            `}
          >
            {loading ? "Processing..." : `Confirm ${type}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuySellModal;
