import { LogOut } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { SidebarSection } from "./SidebarSection";
import { ThemeToggle } from "./ThemeToggle";
import { useSidebar } from "./useSidebar";
import { SidebarSections } from "./Sidebar.config.js";

export const Sidebar = () => {
  const { open, toggle } = useSidebar();

  return (
    <>
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-background-alt border-r py-8 px-6
        transition-all duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center gap-[12px] mb-[48px]">
          <span className="size-[42px] gradiant rounded-[10px] flex items-center justify-center font-bold text-xl text-[#1c1c1e] [box-shadow:0_4px_12px_rgba(184,_115,_51,_0.25)]">
            PV
          </span>
          <h1 className="text-[22px] font-bold text-primary">PerfectVault</h1>
        </div>

        {/* Navigation */}
        <nav>
          {SidebarSections.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </nav>

        {/* Footer Profile */}
        <div className="mt-auto pt-6 border-t">
          <ThemeToggle showAll />
          <SidebarItem
            key={"logout"}
            item={{
              label: "Logout",
              path: "/login",
              icon: LogOut,
            }}
          />
        </div>
      </aside>

      {/* Mobile Toggle */}
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 lg:hidden bg-background
        w-14 h-14 rounded-full flex items-center justify-center
        text-white shadow-lg z-50"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
    </>
  );
};
