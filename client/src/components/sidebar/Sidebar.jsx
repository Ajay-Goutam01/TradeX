import {
  LayoutDashboard,
  ChartCandlestick,
  BriefcaseBusiness,
  Package,
  ClipboardList,
  Star,
  Wallet,
  Receipt,
  User,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const menus = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
  },
  {
    label: "Markets",
    icon: ChartCandlestick,
    to: "/dashboard/markets",
  },
  {
    label: "Portfolio",
    icon: BriefcaseBusiness,
    to: "/dashboard/portfolio",
  },
  {
    label: "Holdings",
    icon: Package,
    to: "/dashboard/holdings",
  },
  {
    label: "Orders",
    icon: ClipboardList,
    to: "/dashboard/orders",
  },
  {
    label: "Watchlist",
    icon: Star,
    to: "/dashboard/watchlist",
  },
  {
    label: "Wallet",
    icon: Wallet,
    to: "/dashboard/wallet",
  },
  {
    label: "Transactions",
    icon: Receipt,
    to: "/dashboard/transactions",
  },
  {
    label: "Profile",
    icon: User,
    to: "/dashboard/profile",
  },
];

function Sidebar() {
  return (
    <aside className="sticky top-[76px] h-[calc(100vh-76px)] w-64 border-r border-slate-900 bg-slate-950 p-5">
      <div className="space-y-1.5">
        {menus.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
