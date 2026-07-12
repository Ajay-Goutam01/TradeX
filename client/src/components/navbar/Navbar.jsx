import { Bell } from "lucide-react";

import { useAuth } from "../../features/auth";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[1800px] items-center gap-6 px-6">
        <NavLogo />

        {isAuthenticated && (
          <div className="flex flex-1 justify-center">
            <SearchBar />
          </div>
        )}

        <NavLinks authenticated={isAuthenticated} />

        {isAuthenticated && (
          <button className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
            <Bell size={20} />
          </button>
        )}

        <UserMenu />
      </div>
    </header>
  );
}

export default Navbar;
