import { createBrowserRouter, Route } from "react-router-dom";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Wallet from "../features/wallet/pages/Wallet";
import ProtectedRoute from "../shared/routes/ProtectedRoute";
import DashboardLayout from "../shared/components/layout/DashboardLayout";
import NotFound from "../features/404/NotFound";
import Markets from "../features/markets/pages/Markets";
import Settings from "../features/settings/pages/Settings";
import ProfileTab from "../features/settings/components/Tabs/ProfileTab";
import SecurityTab from "../features/settings/components/Tabs/security/SecurityTab";
import NotificationTab from "../features/settings/components/Tabs/notification/NotificationTab";
import PreferencesTab from "../features/settings/components/Tabs/preferences/PreferencesTab";
import ConnectedTab from "../features/settings/components/Tabs/connected/ConnectedTab";
import Login from "../features/auth/pages/Login.jsx";
import Register from "../features/auth/pages/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
          {
            path: "/settings",
            element: <Settings />,
            children: [
              { index: true, element: <ProfileTab /> },
              { path: "profile", element: <ProfileTab /> },
              { path: "security", element: <SecurityTab /> },
              { path: "notifications", element: <NotificationTab /> },
              { path: "preferences", element: <PreferencesTab /> },
              { path: "connected", element: <ConnectedTab /> },
            ],
          },
        ],
      },
    ],
  },
]);
