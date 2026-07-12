import { useEffect } from "react";

import useMarket from "../../market/hooks/useMarket";

import DashboardHeader from "../components/DashboardHeader";
import MarketSnapshot from "../components/MarketSnapshot";
import PortfolioSummary from "../components/PortfolioSummary";
import QuickActions from "../components/QuickActions";
import RecentOrders from "../components/RecentOrders";
import WalletCard from "../../walllet/components/WalletCard";
function Dashboard() {
  const { getHome } = useMarket();

  useEffect(() => {
    getHome();
  }, []);

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <PortfolioSummary />

      <WalletCard />

      <QuickActions />

      <MarketSnapshot />

      <RecentOrders />
    </div>
  );
}

export default Dashboard;
