import { useDispatch, useSelector } from "react-redux";

import {
  fetchOrders,
  placeBuyOrder,
  placeSellOrder,
} from "../state/order.slice";

function useOrders() {
  const dispatch = useDispatch();

  const { orders, loading, placing, error } = useSelector(
    (state) => state.order,
  );

  const getOrders = () => dispatch(fetchOrders());

  const buyOrder = (payload) => dispatch(placeBuyOrder(payload)).unwrap();

  const sellOrder = (payload) => dispatch(placeSellOrder(payload)).unwrap();

  return {
    orders,
    loading,
    placing,
    error,

    getOrders,

    buyOrder,

    sellOrder,
  };
}

export default useOrders;
