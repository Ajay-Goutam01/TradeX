import { useEffect } from "react";

import useWallet from "../hooks/useWallet";

import WalletCard from "../components/WalletCard";

function Wallet() {
  const { getWallet, loading } = useWallet();

  useEffect(() => {
    getWallet();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Wallet...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Wallet</h1>

        <p className="mt-2 text-slate-500">
          Manage your paper trading balance.
        </p>
      </div>

      <WalletCard />
    </div>
  );
}

export default Wallet;
