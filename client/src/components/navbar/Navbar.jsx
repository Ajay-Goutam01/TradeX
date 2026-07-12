import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useAuth } from "../../features/auth";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

function Navbar() {
  const { isAuthenticated } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1800px] items-center justify-between px-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <NavLogo />
          
          {/* Guest Navigation Links (Desktop) */}
          <NavLinks authenticated={isAuthenticated} />
        </div>

        {/* Center: Search Bar (Desktop) */}
        {isAuthenticated ? (
          <div className="hidden flex-1 max-w-md justify-center lg:flex mx-6">
            <SearchBar />
          </div>
        ) : (
          <div className="hidden flex-1 max-w-sm justify-center lg:flex mx-6">
            <div className="relative w-full">
              <input
                type="text"
                disabled
                placeholder="Search stocks, indices..."
                className="w-full rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2.5 text-xs text-slate-400 outline-none cursor-pointer hover:border-slate-700/80"
              />
            </div>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <button className="relative rounded-xl p-2.5 text-slate-400 hover:bg-slate-800/50 hover:text-white transition-colors duration-200">
              <Bell size={20} />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-slate-950" />
            </button>
          )}

          <div className="hidden sm:block">
            <UserMenu />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-xl p-2.5 text-slate-400 hover:bg-slate-800/50 hover:text-white xl:hidden transition-colors duration-200"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="xl:hidden animate-fade-in border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-lg">
          <div className="p-4 space-y-4">
            {isAuthenticated && (
              <div className="mb-2">
                <SearchBar />
              </div>
            )}
            <NavLinks
              authenticated={isAuthenticated}
              mobile
              onItemClick={() => setMobileOpen(false)}
            />
            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <UserMenu />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
