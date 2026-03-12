import Switch from "./Switch";

const SwitchRow = ({ item }) => {
  return (
    <div className="flex items-center justify-between px-0 py-4 border-b">
      <div className="flex-1">
        <div className="text-base font-semibold text-primary mb-1">
          {item.title}
        </div>
        <div className="text-sm text-secondary">{item.disc}</div>
      </div>
      <Switch />
    </div>
  );
};
export default SwitchRow;
