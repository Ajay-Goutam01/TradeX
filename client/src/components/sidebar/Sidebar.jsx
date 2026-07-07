import { LayoutDashboard, ChartCandlestick, User } from "lucide-react";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="sticky top-20 h-[calc(100vh-80px)] w-64 border-r border-slate-200 bg-white p-5">
      <div className="space-y-2">
        <SidebarItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />

        <SidebarItem to="/dashboard/profile" icon={User} label="Profile" />

        <SidebarItem to="/" icon={ChartCandlestick} label="Markets" />
      </div>
    </aside>
  );
}

export default Sidebar;
