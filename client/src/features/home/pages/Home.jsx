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
    <>
      <Hero />

      <MarketOverview />

      <Features />
    </>
  );
}

export default Home;
