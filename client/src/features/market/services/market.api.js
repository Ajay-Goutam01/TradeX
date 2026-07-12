import api from "../../../services/api";

export async function getHome() {
  const { data } = await api.get("/market/home");
  return data.data;
}

export async function searchStocks(query) {
  const { data } = await api.get("/market/search", {
    params: {
      q: query,
    },
  });

  return data.data;
}

export async function getMarketDetails(symbol) {
  const { data } = await api.get(`/market/details/${symbol}`);
  return data.data;
}

export async function getHistory(symbol, interval = "1d", range = "1mo") {
  const { data } = await api.get(`/market/history/${symbol}`, {
    params: {
      interval,
      range,
    },
  });

  return data.data;
}

export async function getIndices() {
  const { data } = await api.get("/market/indices");
  return data.data;
}
