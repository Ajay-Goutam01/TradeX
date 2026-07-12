import api from "../../../services/api";

export async function getWatchlist() {
  const { data } = await api.get("/watchlist");

  return data.data;
}

export async function addToWatchlist(stockId) {
  const { data } = await api.post("/watchlist", {
    stockId,
  });

  return data.data;
}

export async function removeFromWatchlist(stockId) {
  const { data } = await api.delete(`/watchlist/${stockId}`);

  return data.data;
}
