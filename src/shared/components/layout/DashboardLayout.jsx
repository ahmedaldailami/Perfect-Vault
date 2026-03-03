import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
