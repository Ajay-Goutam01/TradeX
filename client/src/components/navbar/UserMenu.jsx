import { Link } from "react-router-dom";

import useAuth from "../../features/auth/hooks/useAuth";

function UserMenu() {
  const { user, isAuthenticated, logoutUser } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Link to="/login" className="rounded-xl px-4 py-2 hover:bg-slate-100">
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-blue-600 px-5 py-2 text-white"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="hidden text-right md:block">
        <p className="font-semibold">{user?.name}</p>

        <p className="text-xs text-slate-500">{user?.email}</p>
      </div>

      <button
        onClick={logoutUser}
        className="rounded-xl bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
