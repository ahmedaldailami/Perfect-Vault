import TabItem from "./TabItem";
import { SettingTabs } from "./Tabs.config";

const TabsSection = () => {
  return (
    <div className="flex gap-2 mb-8 border-b pb-4">
      <div className="">
        {SettingTabs.map((item) => (
          <TabItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};
export default TabsSection;
