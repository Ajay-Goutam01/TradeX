import { Search, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Action({ title, icon: Icon, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className={`rounded-xl p-3 ${color}`}>
        <Icon className="text-white" size={22} />
      </div>

      <span className="font-semibold">{title}</span>
    </button>
  );
}

function QuickActions() {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Quick Actions</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <Action
          title="Search Stocks"
          icon={Search}
          color="bg-blue-600"
          onClick={() => navigate("/market")}
        />

        <Action
          title="Buy Stocks"
          icon={ArrowUpCircle}
          color="bg-green-600"
          onClick={() => navigate("/market")}
        />

        <Action
          title="Sell Stocks"
          icon={ArrowDownCircle}
          color="bg-red-600"
          onClick={() => navigate("/market")}
        />
      </div>
    </section>
  );
}

export default QuickActions;
