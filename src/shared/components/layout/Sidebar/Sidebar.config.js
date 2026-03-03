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
        label: "Analytics",
        path: "/analytics",
        icon: "BarChart3",
        badge: "New",
      },
      {
        label: "Users",
        path: "/users",
        icon: "Users",
      },
      {
        label: "Settings",
        path: "/settings",
        icon: "Settings",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Logout",
        path: "/logout",
        icon: "LogOut",
      },
    ],
  },
];
