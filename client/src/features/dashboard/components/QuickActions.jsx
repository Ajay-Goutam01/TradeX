import { Search, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Action({ title, icon: Icon, colorClass, borderClass, textClass, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-800/40"
    >
      <div className={`rounded-xl p-3 border ${colorClass} ${borderClass} ${textClass}`}>
        <Icon size={20} />
      </div>

      <span className="font-bold text-slate-200 text-sm tracking-wide">{title}</span>
    </button>
  );
}

function QuickActions() {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-white tracking-tight">Quick Actions</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <Action
          title="Search Stocks"
          icon={Search}
          colorClass="bg-blue-500/10"
          borderClass="border-blue-500/20"
          textClass="text-blue-400"
          onClick={() => navigate("/dashboard/markets")}
        />

        <Action
          title="Buy Stocks"
          icon={ArrowUpCircle}
          colorClass="bg-emerald-500/10"
          borderClass="border-emerald-500/20"
          textClass="text-emerald-400"
          onClick={() => navigate("/dashboard/markets")}
        />

        <Action
          title="Sell Stocks"
          icon={ArrowDownCircle}
          colorClass="bg-rose-500/10"
          borderClass="border-rose-500/20"
          textClass="text-rose-400"
          onClick={() => navigate("/dashboard/markets")}
        />
      </div>
    </section>
  );
}

export default QuickActions;
