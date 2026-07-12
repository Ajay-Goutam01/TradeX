import { NavLink } from "react-router-dom";

function SidebarItem({ icon: Icon, label, to }) {
  return (
    <NavLink
      to={to}
      end={to === "/dashboard"}
      className={({ isActive }) =>
        `flex items-center gap-4 rounded-xl px-4 py-3 font-semibold text-sm transition-all duration-200

        ${
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/15"
            : "text-slate-400 hover:bg-slate-900 hover:text-white"
        }`
      }
    >
      <Icon size={20} />

      <div className="flex flex-1 items-center justify-between">
        <span>{label}</span>
      </div>
    </NavLink>
  );
}

export default SidebarItem;
