import { useEffect } from "react";

import useMarket from "../../market/hooks/useMarket";

import Hero from "../components/Hero";
import MarketOverview from "../components/MarketOverview";
import Features from "../components/Features";

function Home() {
  const { getHome } = useMarket();

  useEffect(() => {
    getHome();
  }, []);

  return (
    <div className="space-y-16 pb-16">
      <Hero />

      <MarketOverview />

      <Features />
    </div>
  );
}

export default Home;
