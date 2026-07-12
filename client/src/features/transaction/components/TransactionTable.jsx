import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

function TransactionTable({ transactions }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Type</th>

            <th className="px-6 py-4 text-left">Amount</th>

            <th className="px-6 py-4 text-left">Balance</th>

            <th className="px-6 py-4 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id} className="border-t hover:bg-slate-50">
              <td className="px-6 py-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold

                  ${
                    transaction.transactionType === "BUY"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {transaction.transactionType === "BUY" ? (
                    <ArrowUpRight size={15} />
                  ) : (
                    <ArrowDownLeft size={15} />
                  )}

                  {transaction.transactionType}
                </span>
              </td>

              <td className="px-6 py-5 font-semibold">
                ₹{Number(transaction.amount).toLocaleString()}
              </td>

              <td className="px-6 py-5 font-semibold">
                ₹{Number(transaction.balanceAfterTransaction).toLocaleString()}
              </td>

              <td className="px-6 py-5 text-sm text-slate-500">
                {new Date(transaction.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
