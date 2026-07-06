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
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Why Choose StockTrade?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-blue-600 p-4">
                <Icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold">{feature.title}</h3>

              <p className="mt-4 text-slate-500">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
