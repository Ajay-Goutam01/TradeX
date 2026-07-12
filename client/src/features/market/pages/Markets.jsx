import SearchBar from "../../../components/navbar/SearchBar";

import MarketSnapshot from "../../dashboard/components/MarketSnapshot";

function Markets() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Markets</h1>

        <p className="mt-2 text-slate-500">
          Explore stocks, indices and market movers.
        </p>
      </div>

      <SearchBar />

      <MarketSnapshot />
    </div>
  );
}

export default Markets;
