import { useRoutes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import PublicRoute from "../routes/PublicRoute";
import ProtectedRoute from "../routes/ProtectedRoute";

import Home from "../features/home/pages/Home";

import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Profile from "../features/auth/pages/Profile";

import Dashboard from "../features/dashboard/pages/Dashboard";

import MarketDetails from "../features/market/pages/MarketDetails";

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
   * Public Auth Routes
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
   * Protected Dashboard
   */
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: "market/:symbol",
            element: <MarketDetails />,
          },

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
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
        404 | Page Not Found
      </div>
    ),
  },
];

function AppRouter() {
  return useRoutes(routes);
}

export default AppRouter;