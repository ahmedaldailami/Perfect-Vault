import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1 px-10 py-8 overflow-y-auto [transition:background-color_0.3s_ease]">
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
