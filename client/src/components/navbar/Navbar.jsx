import { useAuth } from "../../features/auth";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">
        <NavLogo />

        {isAuthenticated && <SearchBar />}

        <NavLinks authenticated={isAuthenticated} />

        <UserMenu />
      </div>
    </header>
  );
}

export default Navbar;
