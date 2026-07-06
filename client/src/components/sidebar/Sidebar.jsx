import {
  LayoutDashboard,
  ChartCandlestick,
  Briefcase,
  Wallet,
  ClipboardList,
  Star,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="sticky top-[72px] h-[calc(100vh-72px)] w-64 border-r bg-white p-5">
      <div className="space-y-2">

        <SidebarItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <SidebarItem
          to="/market"
          icon={ChartCandlestick}
          label="Market"
        />

        <SidebarItem
          to="/portfolio"
          icon={Briefcase}
          label="Portfolio"
        />

        <SidebarItem
          to="/orders"
          icon={ClipboardList}
          label="Orders"
        />

        <SidebarItem
          to="/watchlist"
          icon={Star}
          label="Watchlist"
        />

        <SidebarItem
          to="/funds"
          icon={Wallet}
          label="Funds"
        />

        <SidebarItem
          to="/settings"
          icon={Settings}
          label="Settings"
        />

      </div>
    </aside>
  );
}

export default Sidebar;