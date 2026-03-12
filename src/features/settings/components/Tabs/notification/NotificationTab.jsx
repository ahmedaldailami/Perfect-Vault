import SwitchRow from "../SwitchRow";
import { NotificationData } from "./Notification.config";

const NotificationTab = () => {
  return (
    <section className="settings-content" id="security">
      <div className="card-bg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[20px] font-semibold text-primary">
            Notification Preferences
          </h3>
          <p className="text-sm text-secondary">
            Choose how you want to receive updates
          </p>
        </div>

        <div>
          {NotificationData.map((item) => (
            <SwitchRow key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default NotificationTab;
