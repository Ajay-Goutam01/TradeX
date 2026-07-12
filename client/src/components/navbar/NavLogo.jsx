import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
        TX
      </div>

      <div className="hidden sm:block">
        <h1 className="text-lg font-bold text-white">TradeX</h1>

        <p className="text-xs text-slate-400">Virtual Trading Platform</p>
      </div>
    </Link>
  );
}

export default NavLogo;
