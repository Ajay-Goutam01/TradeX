import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";

import useAuth from "../../features/auth/hooks/useAuth";

function UserMenu() {
  const navigate = useNavigate();

  const { user, isAuthenticated, logoutUser } = useAuth();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logoutUser();

    setOpen(false);

    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-xl px-5 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-slate-600"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold text-white">{user?.name}</p>

          <p className="text-xs text-slate-400">{user?.email}</p>
        </div>

        <ChevronDown
          size={18}
          className={`text-slate-400 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          <div className="border-b border-slate-800 px-5 py-4">
            <h3 className="font-semibold text-white">{user?.name}</h3>

            <p className="text-sm text-slate-400">{user?.email}</p>
          </div>

          <Link
            to="/dashboard/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-4 text-slate-300 transition hover:bg-slate-800"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            to="/dashboard/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-4 text-slate-300 transition hover:bg-slate-800"
          >
            <Settings size={18} />
            Settings
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-5 py-4 text-red-400 transition hover:bg-red-950/40"
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
