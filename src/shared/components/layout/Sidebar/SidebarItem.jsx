import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item }) => {
  // const Icon = item.icon;
  
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
         ${isActive
           ? "bg-primary text-white shadow-md"
           : "text-gray-400 hover:bg-gray-800 hover:text-white"}`
      }
    >
      {/* <Icon size={20} /> */}

      <span className="flex-1">{item.label}</span>

      {item.badge && (
        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
};