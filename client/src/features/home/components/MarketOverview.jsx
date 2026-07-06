import useMarket from "../../market/hooks/useMarket";

import MarketCard from "../../../components/cards/MarketCard";
import StockListCard from "../../../components/cards/StockListCard";

function MarketOverview() {
  const { loading, indices, topGainers, topLosers, mostActive } = useMarket();

  if (loading) {
    return <div className="text-center">Loading Market...</div>;
  }

  const cards = [
    indices?.nifty50,
    indices?.bankNifty,
    indices?.sensex,
    indices?.finnifty,
  ];

  return (
    <section className="mx-auto max-w-7xl space-y-10 px-6">
      <div>
        <h2 className="mb-8 text-3xl font-bold">Market Overview</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((item) =>
            item ? (
              <MarketCard
                key={item.symbol}
                title={item.name}
                price={`₹ ${item.price}`}
                change={`${item.changePercent.toFixed(2)}%`}
                positive={item.changePercent >= 0}
              />
            ) : null,
          )}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <StockListCard title="Top Gainers" stocks={topGainers} />

        <StockListCard title="Top Losers" stocks={topLosers} />

        <StockListCard title="Most Active" stocks={mostActive} />
      </div>
    </section>
  );
}

export default MarketOverview;
