import SearchItem from "./SearchItem";
import SearchSkeleton from "./SearchSkeleton";

function SearchDropDown({ loading, results, onSelect }) {
  if (loading) {
    return <SearchSkeleton />;
  }

  return (
    <div className="absolute top-full mt-2 max-h-96 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
      {results.length === 0 ? (
        <div className="p-6 text-center text-slate-500">No stocks found.</div>
      ) : (
        results.map((stock) => (
          <SearchItem key={stock.symbol} stock={stock} onClick={onSelect} />
        ))
      )}
    </div>
  );
}

export default SearchDropDown;
