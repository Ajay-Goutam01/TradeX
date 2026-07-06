import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-md">
        ST
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900">StockTrade</h2>

        <p className="text-xs text-slate-500">Paper Trading</p>
      </div>
    </Link>
  );
}

export default NavLogo;
