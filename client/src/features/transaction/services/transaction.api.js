import api from "../../../services/api";

export async function getTransactions() {
  const {data} = await api.get("/transactions");

  return data.data;
}
