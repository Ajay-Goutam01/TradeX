import { Trash2 } from "lucide-react";

import useWatchlist from "../hooks/useWatchlist";

function WatchlistTable({ watchlist }) {
  const { remove } = useWatchlist();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Symbol</th>

            <th className="px-6 py-4 text-left">Company</th>

            <th className="px-6 py-4 text-left">Exchange</th>

            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {watchlist.map((item) => (
            <tr key={item._id} className="border-t hover:bg-slate-50">
              <td className="px-6 py-5 font-semibold">{item.stock.symbol}</td>

              <td className="px-6 py-5">{item.stock.companyName}</td>

              <td className="px-6 py-5">{item.stock.exchange}</td>

              <td className="px-6 py-5 text-center">
                <button
                  onClick={() => remove(item.stock._id)}
                  className="rounded-xl p-2 text-red-600 transition hover:bg-red-100"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchlistTable;
