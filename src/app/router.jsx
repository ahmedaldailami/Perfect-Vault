import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Wallet from "../features/wallet/pages/Wallet";
import ProtectedRoute from "../shared/routes/ProtectedRoute";
import DashboardLayout from "../shared/components/layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/wallet", element: <Wallet /> },
        ],
      },
    ],
  },
]);
