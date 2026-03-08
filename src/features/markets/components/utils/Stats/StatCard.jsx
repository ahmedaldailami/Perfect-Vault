const StatCard = ({ stat }) => {
  return (
    <div className="card-bg p-5 hover:border-myColor hover:-translate-y-1 hover:[box-shadow:0_8px_24px_var(--shadow)]">
      <div className="flex-1 min-w-0">
        <div className="text-[13px] text-muted mb-2">{stat.label}</div>
        <div className="text-[22px] font-bold text-primary">{stat.value}</div>
        <div className="text-[13px] mt-1">{stat.change}</div>
      </div>
    </div>
  );
};

export default StatCard;
