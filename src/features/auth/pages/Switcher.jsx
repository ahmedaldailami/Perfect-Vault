import { NavLink } from "react-router-dom";

const Switcher = () => {
  return (
    <div className="flex card-bg p-1.5 mb-8">
      <NavLink
        to="/login"
        end="login"
        className={({ isActive }) => `
        flex-1 p-3.5 [font-family:inherit] text-base text-center font-semibold cursor-pointer rounded-[8px] [transition:all_0.2s_ease] active hover:text-primary"
        ${isActive ? "gradiant text-[#1c1c1e]" : " bg-none text-secondary"}
           `}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/register"
        end="/register"
        className={({ isActive }) => `
        flex-1 p-3.5 [font-family:inherit] text-base text-center font-semibold cursor-pointer rounded-[8px] [transition:all_0.2s_ease] active hover:text-primary"
        ${isActive ? "gradiant text-[#1c1c1e]" : " bg-none text-secondary"}
           `}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
export default Switcher;
