import { sidebarSections } from "./sidebar.config";
import { SidebarSection } from "./SidebarSection";
import { useSidebar } from "./useSidebar";

export const Sidebar = () => {
  const { open, toggle } = useSidebar();

  return (
    <>
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-gray-900 border-r border-gray-800
        transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">PerfectDash</h1>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-6 overflow-y-auto h-[calc(100%-140px)]">
          {sidebarSections.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </nav>

        {/* Footer Profile */}
        <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-800 cursor-pointer transition">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center font-bold">
              MP
            </div>
            <div>
              <p className="text-sm text-white font-medium">Mr.Perfect</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Toggle */}
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 lg:hidden bg-green-600
        w-14 h-14 rounded-full flex items-center justify-center
        text-white shadow-lg"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
    </>
  );
};
