function AboutCompany({ stock }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Company Information</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-500">Company Name</p>

          <h3 className="mt-2 text-lg font-semibold">
            {stock.companyName || stock.name}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">Sector</p>

          <h3 className="mt-2 text-lg font-semibold">
            {stock.sector || "N/A"}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">Industry</p>

          <h3 className="mt-2 text-lg font-semibold">
            {stock.industry || "N/A"}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">Instrument</p>

          <h3 className="mt-2 text-lg font-semibold">
            {stock.instrumentType || "Equity"}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
