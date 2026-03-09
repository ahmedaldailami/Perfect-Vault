const Opportunity = ({ item }) => {
  return (
    <div className="p-5 bg-[rgba(255,_255,_255,_0.03)] rounded-xl border [transition:all_0.2s_ease] hover:border-myColor">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="size-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
          style={item.color}
        >
          {item.icon}
        </div>
        <div>
          <div className="text-base font-semibold text-primary">
            {item.name}
          </div>
          <div className="text-[13px] text-[#5a9a5a]">{item.apy} APY</div>
        </div>
      </div>
      <div className="flex justify-between mb-3">
        <span className="text-[13px] text-muted">Staked</span>
        <span className="text-sm font-semibold text-primary">
          {item.staked}
        </span>
      </div>
      <div className="flex justify-between mb-3">
        <span className="text-[13px] text-muted">Rewards</span>
        <span className="text-sm font-semibold text-primary">
          {item.rewards}
        </span>
      </div>
      <button className="w-full p-2.5 rounded-lg text-sm font-semibold cursor-pointer [transition:all_0.2s_ease] border border-myColor bg-transparent text-myColor">
        Manage Stake
      </button>
    </div>
  );
};
export default Opportunity;
