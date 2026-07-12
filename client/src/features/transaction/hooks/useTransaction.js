import { useDispatch, useSelector } from "react-redux";

import { fetchTransactions } from "../state/transaction.slice";

function useTransaction() {
  const dispatch = useDispatch();

  const { transactions, loading, error } = useSelector(
    (state) => state.transaction,
  );

  return {
    transactions,
    loading,
    error,

    getTransactions: () => dispatch(fetchTransactions()),
  };
}

export default useTransaction;
