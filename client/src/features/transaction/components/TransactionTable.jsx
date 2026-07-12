import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

function TransactionTable({ transactions }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-xl backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950/30 border-b border-slate-800/60">
            <tr>
              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400 text-left">Type</th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400 text-left">Amount</th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400 text-left">Balance</th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-slate-400 text-left">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/40">
            {transactions.map((transaction) => {
              const isOutflow = ["BUY", "WITHDRAW"].includes(transaction.type);

              return (
                <tr key={transaction._id} className="transition-colors hover:bg-slate-800/25">
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold border
                      ${
                        isOutflow
                          ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      }`}
                    >
                      {isOutflow ? (
                        <ArrowUpRight size={13} />
                      ) : (
                        <ArrowDownLeft size={13} />
                      )}
                      {transaction.type}
                    </span>
                  </td>

                  <td className={`px-6 py-4 text-sm font-bold ${isOutflow ? "text-rose-450" : "text-emerald-450"}`}>
                    {isOutflow ? "-" : "+"}₹{Number(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-slate-200">
                    ₹{Number(transaction.balanceAfter).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>

                  <td className="px-6 py-4 text-xs font-medium text-slate-450">
                    {new Date(transaction.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
