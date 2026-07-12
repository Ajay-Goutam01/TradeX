import api from "../../../services/api";

export async function getWallet() {
  const { data } = await api.get("/wallet");

  return data.data;
}

export async function resetWallet() {
  const { data } = await api.post("/wallet/reset");

  return data.data;
}
