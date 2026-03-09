const BalanceCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div
      className={` rounded-[14px] p-6 [transition:all_0.3s_ease]  hover:-translate-y-0.5 hover:glow primary ${item.active ? "gradiant border-0 text-[#1c1c1e]" : "bg-card border hover:border-myColor"}`}
    >
      <div
        className={`size-12 rounded-[10px] flex items-center justify-center mb-4 ${item.active ? "text-[#1c1c1e] bg-[#1c1c1e33]" : "text-myColor bg-[#b8733326]"}`}
      >
        <Icon />
      </div>

      <div
        className={`text-sm mb-2 ${item.active ? "text-[#1c1c1e]" : "text-secondary"}`}
      >
        {item.label}
      </div>
      <div
        className={`text-[27px] font-bold mb-2 ${item.active ? "text-[#1c1c1e]" : "text-primary"}`}
      >
        {item.value}
      </div>
      <div
        className={`text-[14px] ${item.active ? "text-[#1c1c1e]" : "text-myColor-light"}`}
      >
        {item.change}
      </div>
    </div>
  );
};

export default BalanceCard;
