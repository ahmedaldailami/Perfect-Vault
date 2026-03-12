import TabItem from "./TabItem";
import { SettingTabs } from "./Tabs.config";

const TabsSection = () => {
  return (
    <div className="flex flex-col card-bg md:flex-row md:bg-none gap-2 mb-8 border-b pb-4">
        {SettingTabs.map((item) => (
          <TabItem key={item.path} item={item} />
        ))}
    </div>
  );
};
export default TabsSection;
