import { useEffect } from "react";
import { RotateCcw, Wallet } from "lucide-react";

import useWallet from "../hooks/useWallet";

function WalletCard() {
  const { wallet, loading, getWallet, resetWallet } = useWallet();

  useEffect(() => {
    if (getWallet) {
      getWallet();
    }
  }, []);

  if (loading) {
    return <div className="rounded-3xl bg-white p-10">Loading...</div>;
  }

  if (!wallet) return null;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Wallet Balance</h2>

          <p className="mt-1 text-sm text-slate-400 font-medium">Available for trading</p>
        </div>

        <div className="rounded-2xl p-3.5 bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <Wallet size={24} />
        </div>
      </div>

      <h1 className="mt-8 text-5xl font-extrabold text-white tracking-tight">
        ₹{Number(wallet.availableBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-950/40 border border-slate-800/80 p-5">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Blocked Balance</p>

          <h2 className="mt-2.5 text-2xl font-extrabold text-amber-500">
            ₹{Number(wallet.blockedBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-950/40 border border-slate-800/80 p-5">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Total Balance</p>

          <h2 className="mt-2.5 text-2xl font-extrabold text-emerald-400">
            ₹
            {(wallet.availableBalance + wallet.blockedBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
        </div>
      </div>

      <button
        onClick={resetWallet}
        className="mt-8 inline-flex items-center gap-2.5 rounded-xl border border-rose-500/25 bg-rose-500/10 px-6 py-3.5 text-sm font-bold text-rose-400 transition-all duration-200 hover:bg-rose-500 hover:text-white"
      >
        <RotateCcw size={16} />
        Reset Wallet Balance
      </button>
    </div>
  );
}

export default WalletCard;
