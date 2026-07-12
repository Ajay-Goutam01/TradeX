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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-2xl font-bold">
              {type === "BUY" ? "Buy Stock" : "Sell Stock"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">{stock.companyName}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="flex justify-between">
              <span className="text-slate-500">Symbol</span>

              <span className="font-semibold">{stock.symbol}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-slate-500">Current Price</span>

              <span className="font-semibold">
                ₹{Number(stock.price).toLocaleString()}
              </span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Quantity</label>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">
            <div className="flex justify-between">
              <span>Total Amount</span>

              <span className="text-xl font-bold">
                ₹
                {estimated.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex gap-3 border-t p-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`flex-1 rounded-xl py-3 font-semibold text-white transition

            ${
              type === "BUY"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
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
