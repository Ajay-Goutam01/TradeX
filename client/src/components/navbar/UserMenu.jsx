import { ChevronDown, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import useAuth from "../../features/auth/hooks/useAuth";

function UserMenu() {
  const navigate = useNavigate();

  const { user, isAuthenticated, logoutUser } = useAuth();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();

    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-xl px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm hover:shadow-md"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="hidden text-left lg:block">
          <p className="font-semibold">{user?.name}</p>

          <p className="text-xs text-slate-500">{user?.email}</p>
        </div>

        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <Link
            to="/dashboard/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50"
          >
            <User size={18} />
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
