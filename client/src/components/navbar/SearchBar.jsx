import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useMarket from "../../features/market/hooks/useMarket";
import SearchDropDown from "../../features/market/components/SearchDropDown";

function SearchBar() {
  const navigate = useNavigate();

  const { searchStocks, searchResults, searching } = useMarket();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchStocks(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (stock) => {
    setQuery("");

    navigate(`/dashboard/market/${stock.symbol}`);
  };

  return (
    <div className="relative hidden w-full max-w-lg lg:block">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Stocks..."
        className="w-full rounded-2xl border border-slate-200 bg-slate-100 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
      />

      <SearchDropDown
        loading={searching}
        results={searchResults}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default SearchBar;
