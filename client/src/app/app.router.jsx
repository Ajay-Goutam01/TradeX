import { useRoutes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import PublicRoute from "../routes/PublicRoute";
import ProtectedRoute from "../routes/ProtectedRoute";

// Home
import Home from "../features/home/pages/Home";

// Auth
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Profile from "../features/auth/pages/Profile";

// Dashboard
import Dashboard from "../features/dashboard/pages/Dashboard";

// Market
import MarketDetails from "../features/market/pages/MarketDetails";
import Markets from "../features/market/pages/Markets";
// Portfolio
import Portfolio from "../features/portfolio/pages/Portfolio";

// Holdings
import Holdings from "../features/holding/pages/Holdings";

// Orders
import Orders from "../features/orders/pages/Orders";
import OrderDetails from "../features/orders/pages/OrderDetails";

// Watchlist
import Watchlist from "../features/watchlist/pages/Watchlist";

// Wallet
import Wallet from "../features/walllet/pages/Wallet";

// Transactions
import Transactions from "../features/transaction/pages/Transactions";

const routes = [
  /**
   * Public Website
   */
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  /**
   * Guest Routes
   */
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  /**
   * Protected Routes
   */
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          // Dashboard
          {
            index: true,
            element: <Dashboard />,
          },

          // Market
          {
            path: "market/:symbol",
            element: <MarketDetails />,
          },
          {
            path:"markets",
            element:<Markets/>
          },

          // Portfolio
          {
            path: "portfolio",
            element: <Portfolio />,
          },

          // Holdings
          {
            path: "holdings",
            element: <Holdings />,
          },

          // Orders
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "orders/:orderId",
            element: <OrderDetails />,
          },

          // Watchlist
          {
            path: "watchlist",
            element: <Watchlist />,
          },

          // Wallet
          {
            path: "wallet",
            element: <Wallet />,
          },

          // Transactions
          {
            path: "transactions",
            element: <Transactions />,
          },

          // Profile
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },

  /**
   * 404
   */
  {
    path: "*",
    element: (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-7xl font-bold">404</h1>

          <p className="mt-3 text-xl text-slate-400">
            Page Not Found
          </p>
        </div>
      </div>
    ),
  },
];

function AppRouter() {
  return useRoutes(routes);
}

export default AppRouter;