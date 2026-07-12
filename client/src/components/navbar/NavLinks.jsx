import { NavLink } from "react-router-dom";

const guestLinks = [
  {
    label: "Home",
    path: "/",
  },
];

const authLinks = [
  // {
  //   label: "Dashboard",
  //   path: "/dashboard",
  // },
  // {
  //   label: "Markets",
  //   path: "/dashboard/markets",
  // },
  // {
  //   label: "Portfolio",
  //   path: "/dashboard/portfolio",
  // },
];

function NavLinks({ authenticated }) {
  const links = authenticated ? authLinks : guestLinks;

  return (
    <nav className="hidden items-center gap-8 xl:flex">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative text-sm font-medium transition ${
              isActive
                ? "text-blue-400"
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