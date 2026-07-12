import { useEffect } from "react";
import { Star } from "lucide-react";

import useWatchlist from "../hooks/useWatchlist";

import WatchlistTable from "../../watchlist/components/WatchlistTable";

function Watchlist() {
  const { watchlist, loading, getWatchlist } = useWatchlist();

  useEffect(() => {
    getWatchlist();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Watchlist...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Watchlist</h1>

          <p className="mt-2 text-slate-500">Track your favourite stocks.</p>
        </div>

        <div className="rounded-2xl bg-yellow-50 px-5 py-3">
          <p className="text-sm text-slate-500">Total Stocks</p>

          <h2 className="text-2xl font-bold text-yellow-600">
            {watchlist.length}
          </h2>
        </div>
      </div>

      {watchlist.length === 0 ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed bg-white">
          <Star size={70} className="text-slate-300" />

          <h2 className="mt-6 text-2xl font-bold">Watchlist Empty</h2>

          <p className="mt-2 text-slate-500">Add stocks to your watchlist.</p>
        </div>
      ) : (
        <WatchlistTable watchlist={watchlist} />
      )}
    </div>
  );
}

export default Watchlist;
