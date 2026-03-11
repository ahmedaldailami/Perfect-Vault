import { NavLink } from "react-router-dom";

const TabItem = ({ item }) => {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `px-6 py-3 rounded-[10px] text-[15px] font-medium cursor-pointer [font-family:inherit] [transition:all_0.2s_ease]
       ${
         isActive
           ? "gradiant glow text-black hover:gradiant-hover "
           : "bg-none hover:bg-card  hover:text-primary text-secondary "
       }`
      }
    >
      <span className="flex-1">{item.label}</span>
    </NavLink>

  );
};
export default TabItem;
