import { NavLink } from "react-router-dom";

const guestLinks = [
  {
    label: "Markets",
    path: "/market",
  },
  {
    label: "IPO",
    path: "/ipo",
  },
];

const authLinks = [
  {
    label: "Market",
    path: "/market",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Orders",
    path: "/orders",
  },
  {
    label: "Watchlist",
    path: "/watchlist",
  },
];

function NavLinks({ authenticated }) {
  const links = authenticated ? authLinks : guestLinks;

  return (
    <div className="hidden items-center gap-8 xl:flex">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-600"
              : "text-slate-700 hover:text-blue-600"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
