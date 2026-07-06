import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  loginApi,
  registerApi,
  logoutApi,
  getMeApi,
} from "../services/auth.api";

import { setLoading, setUser, logout } from "../state/auth.slice";

const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const loginUser = async (payload) => {
    try {
      dispatch(setLoading(true));

      const { data } = await loginApi(payload);

      dispatch(setUser(data.data));

      toast.success(data.message);

      return true;
    } catch (error) {
      dispatch(setLoading(false));

      toast.error(error.response?.data?.message || "Login failed");

      return false;
    }
  };

  const registerUser = async (payload) => {
    try {
      dispatch(setLoading(true));

      const { data } = await registerApi(payload);

      dispatch(setUser(data.data));

      toast.success(data.message);

      return true;
    } catch (error) {
      dispatch(setLoading(false));

      toast.error(error.response?.data?.message || "Registration failed");

      return false;
    }
  };

  const logoutUser = async () => {
    try {
      await logoutApi();

      dispatch(logout());

      toast.success("Logged out");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const getCurrentUser = async () => {
    try {
      dispatch(setLoading(true));

      const { data } = await getMeApi();

      dispatch(setUser(data.data));
    } catch (error) {
      dispatch(logout());
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    ...auth,
    loginUser,
    registerUser,
    logoutUser,
    getCurrentUser,
  };
};

export default useAuth;
