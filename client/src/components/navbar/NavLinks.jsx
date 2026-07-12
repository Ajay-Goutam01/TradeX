import { NavLink } from "react-router-dom";

export const guestLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Markets",
    path: "/dashboard/markets",
  },
  {
    label: "Pricing",
    path: "#pricing",
  },
  {
    label: "About",
    path: "#about",
  },
];

export const authLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Markets",
    path: "/dashboard/markets",
  },
  {
    label: "Portfolio",
    path: "/dashboard/portfolio",
  },
  {
    label: "Holdings",
    path: "/dashboard/holdings",
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
  },
  {
    label: "Watchlist",
    path: "/dashboard/watchlist",
  },
  {
    label: "Wallet",
    path: "/dashboard/wallet",
  },
  {
    label: "Transactions",
    path: "/dashboard/transactions",
  },
];

function NavLinks({ authenticated, mobile, onItemClick }) {
  const links = authenticated ? authLinks : guestLinks;

  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-4 p-4 bg-slate-900 border-t border-slate-800"
          : "hidden items-center gap-6 xl:flex"
      }
    >
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `relative text-sm font-semibold tracking-wide transition-colors duration-200 ${
              isActive
                ? "text-blue-400 font-bold"
                : "text-slate-400 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks;