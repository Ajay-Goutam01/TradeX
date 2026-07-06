function SearchSkeleton() {
  return (
    <div className="absolute top-full mt-2 w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="mb-4 animate-pulse last:mb-0"
        >
          <div className="h-4 w-40 rounded bg-slate-200" />

          <div className="mt-2 h-3 w-24 rounded bg-slate-100" />
        </div>
      ))}

    </div>
  );
}

export default SearchSkeleton;