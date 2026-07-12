import { Trash2 } from "lucide-react";

import useWatchlist from "../hooks/useWatchlist";

function WatchlistTable({ watchlist }) {
  const { remove } = useWatchlist();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-xl backdrop-blur-md">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-950/30 border-b border-slate-800/60">
            <tr>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Symbol</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Company</th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider font-semibold text-slate-400">Exchange</th>

              <th className="px-6 py-4 text-center text-xs uppercase tracking-wider font-semibold text-slate-400">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/40">
            {watchlist.map((item) => (
              <tr key={item._id} className="transition-colors hover:bg-slate-800/25">
                <td className="px-6 py-4 font-bold text-white tracking-wide">{item.stock.symbol?.replace(".NS", "")}</td>

                <td className="px-6 py-4 text-sm text-slate-200">{item.stock.companyName}</td>

                <td className="px-6 py-4 text-sm text-slate-350">{item.stock.exchange}</td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => remove(item.stock._id)}
                    className="rounded-xl p-2.5 text-rose-450 transition-colors duration-200 hover:bg-rose-500/15"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchlistTable;
