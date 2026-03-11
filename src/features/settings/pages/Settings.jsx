import { Outlet } from "react-router-dom";
import TabsSection from "../components/dij/TabsSection";

const Settings = () => {
  return (
    <div>
      <TabsSection />
      <Outlet />
    </div>
  );
};

export default Settings;
