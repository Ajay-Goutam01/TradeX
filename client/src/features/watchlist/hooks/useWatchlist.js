import { useDispatch, useSelector } from "react-redux";

import {
  fetchWatchlist,
  addStock,
  removeStock,
} from "../state/watchlist.slice";

function useWatchlist() {
  const dispatch = useDispatch();

  const { watchlist, loading, error } = useSelector((state) => state.watchlist);

  return {
    watchlist,
    loading,
    error,

    getWatchlist: () => dispatch(fetchWatchlist()),

    add: (stockId) => dispatch(addStock(stockId)).unwrap(),

    remove: (stockId) => dispatch(removeStock(stockId)).unwrap(),
  };
}

export default useWatchlist;
