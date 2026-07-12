import { useEffect } from "react";
import { BriefcaseBusiness } from "lucide-react";

import useHolding from "../hooks/useHolding";
import HoldingTable from "../components/HoldingTable";

function Holdings() {
  const { holdings, loading, getHoldings } = useHolding();

  useEffect(() => {
    getHoldings();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Holdings...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Holdings</h1>

          <p className="mt-2 text-slate-500">
            Your current investment portfolio.
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50 px-5 py-3">
          <p className="text-sm text-slate-500">Total Holdings</p>

          <h2 className="text-2xl font-bold text-blue-600">
            {holdings.length}
          </h2>
        </div>
      </div>

      {holdings.length === 0 ? (
        <div className="flex h-96 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white">
          <BriefcaseBusiness size={70} className="text-slate-300" />

          <h2 className="mt-6 text-2xl font-bold">No Holdings</h2>

          <p className="mt-2 text-slate-500">
            Buy your first stock to build your portfolio.
          </p>
        </div>
      ) : (
        <HoldingTable holdings={holdings} />
      )}
    </div>
  );
}

export default Holdings;
