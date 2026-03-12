import { Outlet } from "react-router-dom";
import TabsSection from "../components/dij/TabsSection";

const Settings = () => {
  return (
    <div>
      <TabsSection />

      {/*        Tabs        */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
