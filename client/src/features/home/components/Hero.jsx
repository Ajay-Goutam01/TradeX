import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950/20 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
          <TrendingUp size={16} />
          TradeX
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl tracking-tight">
          Learn Trading
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Without Losing Money</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-450 font-medium">
          TradeX is a premium paper trading platform modeled after modern financial institutions,
          allowing users to practice stock trading using live market data, build
          portfolios, and sharpen skills without capital risk.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link
            to="/register"
            className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4.5 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="rounded-2xl border border-slate-800 bg-slate-900/40 px-8 py-4.5 text-lg font-bold text-slate-300 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 hover:-translate-y-0.5"
          >
            Login
          </Link>
        </div>

        <div className="mt-24 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-850 bg-slate-900/30 p-8 shadow-lg transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/50 hover:shadow-2xl">
            <h2 className="text-4xl font-extrabold text-white">Live</h2>

            <p className="mt-2 text-sm font-semibold text-slate-500">Market Data</p>
          </div>

          <div className="rounded-3xl border border-slate-850 bg-slate-900/30 p-8 shadow-lg transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/50 hover:shadow-2xl">
            <h2 className="text-4xl font-extrabold text-white">₹10L</h2>

            <p className="mt-2 text-sm font-semibold text-slate-500">Virtual Capital</p>
          </div>

          <div className="rounded-3xl border border-slate-850 bg-slate-900/30 p-8 shadow-lg transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/50 hover:shadow-2xl">
            <h2 className="text-4xl font-extrabold text-white">100%</h2>

            <p className="mt-2 text-sm font-semibold text-slate-500">Risk Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
