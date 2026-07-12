import { useEffect } from "react";
import { ReceiptText } from "lucide-react";

import useTransaction from "../hooks/useTransaction";
import TransactionTable from "../components/TransactionTable";

function Transactions() {
  const { transactions, loading, getTransactions } = useTransaction();

  useEffect(() => {
    getTransactions();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Transactions...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>

          <p className="mt-2 text-slate-500">Wallet transaction history.</p>
        </div>

        <div className="rounded-2xl bg-blue-50 px-5 py-3">
          <p className="text-sm text-slate-500">Total Transactions</p>

          <h2 className="text-2xl font-bold text-blue-600">
            {transactions.length}
          </h2>
        </div>
      </div>

      {transactions.length === 0 ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed bg-white">
          <ReceiptText size={70} className="text-slate-300" />

          <h2 className="mt-6 text-2xl font-bold">No Transactions</h2>

          <p className="mt-2 text-slate-500">
            Your wallet history will appear here.
          </p>
        </div>
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </div>
  );
}

export default Transactions;
