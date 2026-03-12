import Select from "../Select";
import SwitchRow from "../SwitchRow";
import { PreferencesData } from "./Preferences.config";

const PreferencesTab = () => {
  return (
    <section className="settings-content" id="security">
      <div className="card-bg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">
            Display Preferences
          </h3>
          <p className="text-sm text-secondary">
            Customize how the app looks and behaves
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {PreferencesData.select.map((item) => (
            <Select key={item.label} item={item} />
          ))}
        </div>
        <div>
          {PreferencesData.check.map((item) => (
            <SwitchRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PreferencesTab;
