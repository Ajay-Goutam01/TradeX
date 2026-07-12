function AboutCompany({ stock }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-white tracking-tight">Company Information</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 rounded-2xl bg-slate-950/20 border border-slate-800/40">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Company Name</p>

          <h3 className="mt-2 text-base font-bold text-white">
            {stock.companyName || stock.name}
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/20 border border-slate-800/40">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Sector</p>

          <h3 className="mt-2 text-base font-bold text-slate-200">
            {stock.sector || "N/A"}
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/20 border border-slate-800/40">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Industry</p>

          <h3 className="mt-2 text-base font-bold text-slate-200">
            {stock.industry || "N/A"}
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/20 border border-slate-800/40">
          <p className="text-xs uppercase font-bold text-slate-450 tracking-wider">Instrument</p>

          <h3 className="mt-2 text-base font-bold text-slate-200">
            {stock.instrumentType || "Equity"}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
