import api from "../../../services/api";

export const getHomeApi = () => api.get("/market/home");

export const searchStocksApi = (query) => api.get(`/market/search?q=${query}`);

export const getQuoteApi = (symbol) => api.get(`/market/${symbol}`);

export const getHistoryApi = (symbol, interval, range) =>
  api.get(`/market/${symbol}/history?interval=${interval}&range=${range}`);
