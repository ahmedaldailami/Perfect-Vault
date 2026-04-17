import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Wallet2,
} from "lucide-react";

export const SidebarSections = [
  
  {
    title: "Main Menu",
    items: [
      {
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        label: "Markets",
        path: "/markets",
        icon: BarChart3,
        badge: "New",
      },
      {
        label: "Wallet",
        path: "/wallet",
        icon: Wallet2,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
];
