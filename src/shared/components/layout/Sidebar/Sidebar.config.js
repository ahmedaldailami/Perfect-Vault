// import {
//   LayoutDashboard,
//   BarChart3,
//   Users,
//   Settings,
//   LogOut,
// } from "lucide-react";

export const sidebarSections = [
  {
    title: "Main Menu",
    items: [
      {
        label: "Dashboard",
        path: "/",
        icon: "LayoutDashboard",
      },
      {
        label: "Markets",
        path: "/Markets",
        icon: "BarChart3",
        badge: "New",
      },
      {
        label: "Wallet",
        path: "/Wallet",
        icon: "Users",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Settings",
        path: "/settings",
        icon: "Settings",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        label: "Logout",
        path: "/logout",
        icon: "LogOut",
      },
    ],
  },
];
