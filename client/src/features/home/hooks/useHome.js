import { useDispatch, useSelector } from "react-redux";

import { setLoading, setHome } from "../state/home.slice";

import { getHomeApi } from "../services/home.api";

const useHome = () => {
  const dispatch = useDispatch();

  const home = useSelector((state) => state.home);

  const getHome = async () => {
    try {
      dispatch(setLoading(true));

      const { data } = await getHomeApi();

      dispatch(setHome(data.data));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    ...home,

    getHome,
  };
};

export default useHome;
