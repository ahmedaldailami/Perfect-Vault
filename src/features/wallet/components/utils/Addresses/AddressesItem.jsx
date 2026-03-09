import { Copy } from "lucide-react";

const AddressesItem = ({ item }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-[rgba(255,_255,_255,_0.03)] rounded-[10px] [transition:all_0.2s_ease] hover:bg-[rgba(255,_255,_255,_0.06)]">
      <div
        className="size-12 rounded-full flex items-center justify-center font-bold text-lg text-white"
        style={item.color}
      >
        {item.icon}
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold text-primary mb-1">
          {item.name}
        </div>
        <div className="text-[13px] text-muted font-mono">{item.address}</div>
      </div>
      <div className="text-right">
        <div className="text-base font-semibold text-primary mb-1">
          {item.amount}
        </div>
        <div className="text-sm text-secondary">{item.usd}</div>
      </div>
      <button className="p-2 bg-none border rounded-md cursor-pointer text-secondary [transition:all_0.2s_ease] hover:bg-card-alt hover:text-myColor hover:border-myColor">
        <Copy />
      </button>
    </div>
  );
};
export default AddressesItem;
