import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  setLoading,
  setMarketHome,
  setSearchResults,
  setSelectedStock,
  setHistory,
  setSearching,
  setSearchQuery,
} from "../state/market.slice";

import {
  getHomeApi,
  searchStocksApi,
  getQuoteApi,
  getHistoryApi,
} from "../services/market.api";

const useMarket = () => {
  const dispatch = useDispatch();

  const market = useSelector((state) => state.market);

  const getHome = async () => {
    try {
      dispatch(setLoading(true));

      const { data } = await getHomeApi();

      dispatch(setMarketHome(data.data));
    } catch (error) {
      toast.error("Unable to load market.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const searchStocks = async (query) => {
    dispatch(setSearchQuery(query));

    if (!query.trim()) {
      dispatch(setSearching(false));
      dispatch(setSearchResults([]));
      return;
    }

    try {
      dispatch(setSearching(true));

      const { data } = await searchStocksApi(query);

      dispatch(setSearchResults(data.data));
    } catch (error) {
      toast.error("Unable to search stocks.");
    } finally {
      dispatch(setSearching(false));
    }
  };
  const getQuote = async (symbol) => {
    try {
      dispatch(setLoading(true));

      const { data } = await getQuoteApi(symbol);

      dispatch(setSelectedStock(data.data));
    } catch (error) {
      toast.error("Unable to load stock.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const getHistory = async (symbol, interval, range) => {
    try {
      const { data } = await getHistoryApi(symbol, interval, range);

      dispatch(setHistory(data.data.candles));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    ...market,

    getHome,

    searchStocks,

    getQuote,

    getHistory,
  };
};

export default useMarket;
