import { BarChart3, Wallet, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Real Time Market",
    icon: BarChart3,
    description: "Live NSE market data with indices and stocks.",
  },
  {
    title: "Paper Trading",
    icon: Wallet,
    description: "Trade without risking real money.",
  },
  {
    title: "Secure Authentication",
    icon: ShieldCheck,
    description: "JWT based secure authentication system.",
  },
  {
    title: "Advanced Analytics",
    icon: TrendingUp,
    description: "Professional trading dashboard and insights.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-12 text-center text-4xl font-extrabold text-white tracking-tight">
        Why Choose TradeX?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-850 bg-slate-900/30 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-800/30 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-500/15 p-4 border border-blue-500/20 text-blue-400">
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-bold text-white tracking-wide">{feature.title}</h3>

              <p className="mt-3.5 text-sm leading-relaxed text-slate-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
