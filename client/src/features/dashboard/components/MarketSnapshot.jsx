import useMarket from "../../market/hooks/useMarket";

import MarketCard from "../../../components/cards/MarketCard";
import StockListCard from "../../../components/cards/StockListCard";

function MarketSnapshot() {
  const { indices, topGainers, topLosers, mostActive, loading } = useMarket();

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center">
        Loading Market...
      </div>
    );
  }

  const cards = [
    indices?.nifty50,
    indices?.bankNifty,
    indices?.sensex,
    indices?.finnifty,
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="mb-6 text-2xl font-bold">Market Overview</h2>

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

export default MarketSnapshot;
