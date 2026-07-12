import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import {
  placeBuyOrder,
  placeSellOrder,
  fetchOrders,
} from "../state/order.slice";

import { fetchPortfolio } from "../../portfolio/state/portfolio.slice";
import { fetchWallet } from "../../walllet/state/wallet.slice";
import { fetchHoldings } from "../../holding/state/holding.slice";
import { fetchTransactions } from "../../transaction/state/transaction.slice";

function useTrade() {
  const dispatch = useDispatch();

  const buy = async (payload) => {
    try {
      await dispatch(placeBuyOrder(payload)).unwrap();

      await Promise.all([
        dispatch(fetchOrders()),
        dispatch(fetchPortfolio()),
        dispatch(fetchWallet()),
        dispatch(fetchHoldings()),
        dispatch(fetchTransactions()),
      ]);

      toast.success("Buy Order Executed");

      return true;
    } catch (error) {
      toast.error(error?.message || "Buy Failed");
      return false;
    }
  };

  const sell = async (payload) => {
    try {
      await dispatch(placeSellOrder(payload)).unwrap();

      await Promise.all([
        dispatch(fetchOrders()),
        dispatch(fetchPortfolio()),
        dispatch(fetchWallet()),
        dispatch(fetchHoldings()),
        dispatch(fetchTransactions()),
      ]);

      toast.success("Sell Order Executed");

      return true;
    } catch (error) {
      toast.error(error?.message || "Sell Failed");
      return false;
    }
  };

  return {
    buy,
    sell,
  };
}

export default useTrade;
