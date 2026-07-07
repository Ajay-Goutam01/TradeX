import { NavLink } from "react-router-dom";

const guestLinks = [
  {
    label: "Markets",
    path: "/",
  },
];

const authLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Markets",
    path: "/",
  },
];

function NavLinks({ authenticated }) {
  const links = authenticated ? authLinks : guestLinks;

  return (
    <div className="hidden items-center gap-8 lg:flex">
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-blue-600"
              : "font-medium text-slate-600 transition hover:text-blue-600"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
