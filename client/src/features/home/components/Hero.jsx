import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          <TrendingUp size={16} />
          TradeX
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Learn Trading
          <span className="block text-blue-400">Without Losing Money</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          TradeX is a paper trading platform inspired by Dhan and Zerodha,
          allowing users to practice stock trading using live market data, build
          portfolios, and improve trading skills without financial risk.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center space-between gap-5">
          <Link
            to="/register"
            className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="rounded-2xl border border-slate-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Login
          </Link>
        </div>

        <div className="mt-24 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-4xl font-bold text-white">Live</h2>

            <p className="mt-2 text-slate-400">Market Data</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-4xl font-bold text-white">₹10L</h2>

            <p className="mt-2 text-slate-400">Virtual Capital</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-4xl font-bold text-white">100%</h2>

            <p className="mt-2 text-slate-400">Risk Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
