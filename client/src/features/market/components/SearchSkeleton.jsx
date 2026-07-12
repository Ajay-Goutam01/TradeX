function SearchSkeleton() {
  return (
    <div className="absolute top-full mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-md">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="mb-4 animate-pulse last:mb-0">
          <div className="h-4 w-40 rounded bg-slate-800"></div>

          <div className="mt-2.5 h-3.5 w-24 rounded bg-slate-800/60"></div>
        </div>
      ))}
    </div>
  );
}

export default SearchSkeleton;
