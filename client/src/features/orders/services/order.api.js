import api from "../../../services/api";

export async function getOrders(params = {}) {
  const { data } = await api.get("/orders", {
    params,
  });

  return data.data;
}

export async function getOrder(orderId) {
  const { data } = await api.get(`/orders/${orderId}`);

  return data.data;
}

export async function buyStock(payload) {
  const { data } = await api.post("/orders/buy", payload);

  return data.data;
}

export async function sellStock(payload) {
  const { data } = await api.post("/orders/sell", payload);

  return data.data;
}

export async function cancelOrder(orderId) {
  const { data } = await api.patch(`/orders/${orderId}/cancel`);

  return data.data;
}
