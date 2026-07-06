import SearchItem from "./SearchItem";
import SearchSkeleton from "./SearchSkeleton";

function SearchDropDown({ loading, results, onSelect }) {
  if (loading) {
    return <SearchSkeleton />;
  }

  if (!results.length) {
    return null;
  }

  return (
    <div className="absolute top-full mt-2 max-h-96 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
      {results.map((stock) => (
        <SearchItem key={stock.symbol} stock={stock} onClick={onSelect} />
      ))}
    </div>
  );
}

export default SearchDropDown;
