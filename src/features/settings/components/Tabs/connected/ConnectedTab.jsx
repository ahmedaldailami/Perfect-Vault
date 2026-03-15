import InputField from "../../InputField";
import { ConnectedData } from "./Connected.config";
import ConnectedItem from "./ConnectedItem";

const ConnectedTab = () => {
  return (
    <section className="settings-content" id="security">
      <div className="card-bg">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">
            Connected Exchanges
          </h3>
          <p className="text-sm text-secondary">
            Link your exchange accounts for seamless trading
          </p>
        </div>

        <div>
          {ConnectedData.map((item) => (
            <ConnectedItem key={item.title} item={item} />
          ))}
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border text-[#1c1c1e] gradiant hover:gradiant-hover">
            + Add Exchange
          </button>
        </div>
      </div>

      <div className="card-bg">
        <div className="flex flex-col md:flex-row text-center items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">API Keys</h3>
          <p className="text-sm text-secondary">
            Manage your API access for third-party integrations
          </p>
        </div>
        <div>
          <InputField
            label="API Key"
            value="cv_live_xxxxxxxxxxxxxxxxxxxxxxxx"
            id="Api"
            type="text"
            placeholder="Tell us about yourself..."
          />
        </div>
        <div className="flex gap-4 mt-6">
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border-2 text-primary bg-transparent hover:bg-card-alt">
            Regenerate Key
          </button>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold [font-family:inherit] cursor-pointer [transition:all_0.2s_ease] border-2 text-primary bg-transparent hover:bg-card-alt">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
};
export default ConnectedTab;
