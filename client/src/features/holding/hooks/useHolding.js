import { useDispatch, useSelector } from "react-redux";

import { fetchHoldings } from "../state/holding.slice";

function useHolding() {
  const dispatch = useDispatch();

  const { holdings, loading, error } = useSelector((state) => state.holding);

  const getHoldings = () => dispatch(fetchHoldings());

  return {
    holdings,
    loading,
    error,

    getHoldings,
  };
}

export default useHolding;
