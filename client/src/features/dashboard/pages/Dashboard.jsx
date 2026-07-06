import { useEffect } from "react";

import useMarket from "../../market/hooks/useMarket";

import DashboardHeader from "../components/DashboardHeader";
import MarketSnapshot from "../components/MarketSnapshot";
import PortfolioSummary from "../components/PortfolioSummary";
import QuickActions from "../components/QuickActions";
import RecentOrders from "../components/RecentOrders";

function Dashboard() {
  const { getHome } = useMarket();

  useEffect(() => {
    getHome();
  }, []);

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <PortfolioSummary />

      <QuickActions />

      <MarketSnapshot />

      <RecentOrders />
    </div>
  );
}

export default Dashboard;
