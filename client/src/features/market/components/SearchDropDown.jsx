import SearchItem from "./SearchItem";
import SearchSkeleton from "./SearchSkeleton";

function SearchDropDown({ loading, results, onSelect }) {
  if (loading) {
    return <SearchSkeleton />;
  }

  return (
    <div className="absolute top-full mt-2 max-h-96 w-full overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl backdrop-blur-md z-55 divide-y divide-slate-800/40">
      {results.length === 0 ? (
        <div className="p-6 text-center text-sm text-slate-400">No stocks found.</div>
      ) : (
        results.map((stock) => (
          <SearchItem key={stock.symbol} stock={stock} onClick={onSelect} />
        ))
      )}
    </div>
  );
}

export default SearchDropDown;
