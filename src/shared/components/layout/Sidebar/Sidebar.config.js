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
        path: "/markets",
        icon: "BarChart3",
        badge: "New",
      },
      {
        label: "Wallet",
        path: "/wallet",
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
];
