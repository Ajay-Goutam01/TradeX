import { RotateCcw, Wallet } from "lucide-react";

import useWallet from "../hooks/useWallet";

function WalletCard() {
  const { wallet, loading, resetWallet } = useWallet();

  if (loading) {
    return <div className="rounded-3xl bg-white p-10">Loading...</div>;
  }

  if (!wallet) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Wallet Balance</h2>

          <p className="mt-2 text-slate-500">Available for trading</p>
        </div>

        <Wallet size={34} className="text-blue-600" />
      </div>

      <h1 className="mt-8 text-5xl font-bold">
        ₹{Number(wallet.availableBalance).toLocaleString()}
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Blocked Balance</p>

          <h2 className="mt-3 text-2xl font-bold text-orange-600">
            ₹{Number(wallet.blockedBalance).toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Total Balance</p>

          <h2 className="mt-3 text-2xl font-bold text-green-600">
            ₹
            {(wallet.availableBalance + wallet.blockedBalance).toLocaleString()}
          </h2>
        </div>
      </div>

      <button
        onClick={resetWallet}
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        <RotateCcw size={18} />
        Reset Wallet
      </button>
    </div>
  );
}

export default WalletCard;
