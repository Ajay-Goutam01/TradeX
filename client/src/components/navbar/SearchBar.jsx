import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useMarket from "../../features/market/hooks/useMarket";
import SearchDropDown from "../../features/market/components/SearchDropDown";

function SearchBar() {
  const navigate = useNavigate();

  const searchRef = useRef(null);

  const { searchStocks, searchResults, searching } = useMarket();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStocks(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    function handleOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleSelect = (stock) => {
    setQuery("");
    setOpen(false);

    navigate(`/dashboard/market/${stock.symbol}`);
  };

  return (
    <div ref={searchRef} className="relative hidden w-full max-w-lg lg:block">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        placeholder="Search Stocks (RELIANCE, TCS, INFY...)"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-sm text-white outline-none transition focus:border-blue-500"
      />

      {open && (
        <SearchDropDown
          loading={searching}
          results={searchResults}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}

export default SearchBar;
