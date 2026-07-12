import api from "../../../services/api";

export async function getPortfolio() {
  const { data } = await api.get("/portfolio");

  return data.data;
}