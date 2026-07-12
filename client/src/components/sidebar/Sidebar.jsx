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
    to: "/dashboard/market",
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
    <aside className="sticky top-20 h-[calc(100vh-80px)] w-64 border-r border-slate-200 bg-white p-5">
      <div className="space-y-2">
        {menus.map((item) => (
          <SidebarItem key={item.to} {...item} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
