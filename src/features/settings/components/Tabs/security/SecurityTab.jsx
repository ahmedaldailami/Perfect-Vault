import SecurityItem from "./SecurityItem";

const SecurityTab = () => {
  return (
    <div className="settings-content" id="security">
      <div className="card-bg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">
            Security Settings
          </h3>
          <p className="text-sm text-secondary">
            Manage your account security and authentication methods
          </p>
        </div>
        <SecurityItem
          title={"Password"}
          status="Last changed 30 days ago"
          enabled
          btn="Change Password"
        />
        <SecurityItem
          title={"Password"}
          status="Last changed 30 days ago"
          btn="Change Password"
        />
      </div>

      <div className="card-bg">
        <div className="card-header">
          <h3 className="card-title">Danger Zone</h3>
          <p className="card-description">
            Irreversible actions for your account
          </p>
        </div>
        <div className="btn-group">
          <button className="btn danger">Delete Account</button>
          <button className="btn danger">Export All Data</button>
        </div>
      </div>
    </div>
  );
};
export default SecurityTab;
