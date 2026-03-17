import Switch from "./Switch";

const SwitchRow = ({ item }) => {
  return (
    <div className="flex items-center justify-between px-0 py-4 border-b">
      <div className="flex-1 pr-2">
        <h3 className="text-base font-semibold text-primary mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-secondary ">{item.disc}</p>
      </div>
      <div className="">
        <Switch />
      </div>
    </div>
  );
};
export default SwitchRow;
