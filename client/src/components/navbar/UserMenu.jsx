import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";

import useAuth from "../../features/auth/hooks/useAuth";

function UserMenu() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logoutUser } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = async () => {
    await logoutUser();
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-800/40 hover:text-white"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/20"
        >
          Register
        </Link>
      </div>
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-3.5 py-2 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/20"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-md">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold text-white tracking-wide leading-tight">{user?.name}</p>
          <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">{user?.email}</p>
        </div>

        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-200 ${open ? "rotate-180 text-white" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/50 backdrop-blur-md animate-fade-in">
          <div className="border-b border-slate-800 px-5 py-4 bg-slate-950/20">
            <h3 className="font-bold text-white tracking-wide">{user?.name}</h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">{user?.email}</p>
          </div>

          <div className="p-1.5 space-y-0.5">
            <Link
              to="/dashboard/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
            >
              <User size={16} className="text-slate-450" />
              Profile
            </Link>

            <Link
              to="/dashboard/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
            >
              <Settings size={16} className="text-slate-450" />
              Settings
            </Link>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-rose-400 transition-colors hover:bg-rose-500/10 hover:text-rose-300"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
