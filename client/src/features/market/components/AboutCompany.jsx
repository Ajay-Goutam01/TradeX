function AboutCompany({ stock }) {

  if (!stock) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b p-6">

        <h2 className="text-2xl font-bold">
          Company Information
        </h2>

      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">

        <div>

          <p className="text-sm text-slate-500">
            Company
          </p>

          <h3 className="mt-2 font-semibold">
            {stock.name}
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Symbol
          </p>

          <h3 className="mt-2 font-semibold">
            {stock.symbol}
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Exchange
          </p>

          <h3 className="mt-2 font-semibold">
            {stock.exchange}
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Currency
          </p>

          <h3 className="mt-2 font-semibold">
            {stock.currency}
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Market State
          </p>

          <h3 className="mt-2 font-semibold">
            {stock.marketState}
          </h3>

        </div>

      </div>

    </section>
  );
}

export default AboutCompany;