import { SecurityData } from "./Security.config";
import SecurityItem from "./SecurityItem";

const SecurityTab = () => {
  return (
    <section className="settings-content" id="security">
      <div className="card-bg">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">
            Security Settings
          </h3>
          <p className="text-sm text-secondary">
            Manage your account security and authentication methods
          </p>
        </div>

        <div>
          {SecurityData.map((item) => (
            <SecurityItem key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="card-bg">
        <div className="flex flex-col md:flex-row text-center items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">
            Danger Zone
          </h3>
          <p className="card-description">
            Irreversible actions for your account
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border-2 text-muted bg-transparent hover:bg-card-alt">
            Delete Account
          </button>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border-2 text-muted bg-transparent hover:bg-card-alt">
            Export All Data
          </button>
        </div>
      </div>
    </section>
  );
};
export default SecurityTab;
