import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item }) => {
  // const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `flex items-center gap-3.5 px-4 py-3.5 rounded-[10px] mb-1.5 [transition:all_0.2s_ease]
         ${
           isActive
             ? "gradiant glow text-black shadow-md hover:gradiant-hover "
             : "hover:bg-background/50  text-secondary hover:text-white"
         }`
      }
    >
      {/* <Icon size={22} /> */}

      <span className="flex-1">{item.label}</span>

      {item.badge && (
        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
};
