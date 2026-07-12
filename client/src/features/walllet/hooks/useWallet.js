import { useDispatch, useSelector } from "react-redux";

import { fetchWallet, resetUserWallet } from "../state/wallet.slice";

function useWallet() {
  const dispatch = useDispatch();

  const { wallet, loading, error } = useSelector((state) => state.wallet);

  return {
    wallet,
    loading,
    error,

    getWallet: () => dispatch(fetchWallet()),

    resetWallet: () => dispatch(resetUserWallet()),
  };
}

export default useWallet;
