import { useDispatch, useSelector } from "react-redux";

import {
  fetchHome,
  fetchSearchStocks,
  fetchMarketDetails,
  fetchHistory,
} from "../state/market.slice";

function useMarket() {
  const dispatch = useDispatch();

  const {
    loading,
    searching,
    error,
    home,
    stock,
    chart,
    searchResults,
    indices,
    topGainers,
    topLosers,
    mostActive,
    marketStatus,
  } = useSelector((state) => state.market);

  return {
    loading,

    searching,

    error,

    home,

    stock,

    chart,

    searchResults,

    indices,

    topGainers,

    topLosers,

    mostActive,

    marketStatus,

    getHome: () => dispatch(fetchHome()),

    searchStocks: (query) => dispatch(fetchSearchStocks(query)),

    getStock: (symbol) => dispatch(fetchMarketDetails(symbol)),

    getChart: (symbol, interval = "1d", range = "1mo") =>
      dispatch(
        fetchHistory({
          symbol,
          interval,
          range,
        }),
      ),
  };
}

export default useMarket;
