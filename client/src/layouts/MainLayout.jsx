import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="min-h-[calc(100vh-144px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
