import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

function DashboardLayout() {
  return (
    <div className="h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />

      <div className="flex h-[calc(100vh-72px)]">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-slate-950 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
