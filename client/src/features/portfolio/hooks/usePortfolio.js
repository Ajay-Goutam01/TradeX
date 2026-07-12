import { useDispatch, useSelector } from "react-redux";

import { fetchPortfolio } from "../state/portfolio.slice";

function usePortfolio() {
  const dispatch = useDispatch();

  const { portfolio, loading, error } = useSelector((state) => state.portfolio);

  const getPortfolio = () => dispatch(fetchPortfolio());

  return {
    portfolio,
    loading,
    error,

    getPortfolio,
  };
}

export default usePortfolio;
