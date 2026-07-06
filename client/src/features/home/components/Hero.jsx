function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-3xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">

            Real Time Indian Market

          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">

            Trade Without

            <span className="text-blue-600">

              {" "}Risk

            </span>

          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-600">

            India's Modern Paper Trading Platform with
            real-time market data, portfolio tracking
            and professional analytics.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 transition">

              Start Paper Trading

            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold hover:bg-slate-100 transition">

              Explore Markets

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;