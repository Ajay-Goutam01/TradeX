import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

function AuthInitializer({ children }) {
  const { getCurrentUser } = useAuth();

  useEffect(() => {
    getCurrentUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

export default AuthInitializer;