import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Wallet from "../features/wallet/pages/Wallet";
import ProtectedRoute from "../shared/routes/ProtectedRoute";
import DashboardLayout from "../shared/components/layout/DashboardLayout";
import NotFound from "../features/404/NotFound";
import Markets from "../features/markets/pages/Markets";
import Settings from "../features/settings/pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/markets", element: <Markets /> },
          { path: "/wallet", element: <Wallet /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },
]);
