import api from "../../../services/api";

export async function getHoldings() {
  const { data } = await api.get("/holdings");

  return data.data;
}
