import Select from "../Select";
import SwitchRow from "../SwitchRow";
import { PreferencesData } from "./Preferences.config";

const PreferencesTab = () => {
  return (
    <section id="preferences">
      <div className="card-bg">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
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

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border text-[#1c1c1e] gradiant hover:gradiant-hover">
            Save Preferences
          </button>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border text-primary bg-transparent hover:bg-card-alt">
            Reset to Default
          </button>
        </div>
      </div>
    </section>
  );
};
export default PreferencesTab;
