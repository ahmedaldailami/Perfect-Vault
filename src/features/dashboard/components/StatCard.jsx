const StatCard = ({ stat }) => {
  const Icon = stat.icon;
  return (
    <div className="card-bg p-5 flex items-start gap-4 hover:border-myColor hover:-translate-y-1 hover:[box-shadow:0_8px_24px_var(--shadow)]">
      <div className="size-12 text-myColor bg-[rgba(184,_115,_51,_0.15)] rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-[13px] text-secondary mb-1">{stat.label}</div>
        <div className="text-[24px] font-bold text-primary mb-1">
          {stat.value}
        </div>
        <div className="text-[13px] text-muted">{stat.change}</div>
      </div>
    </div>
  );
};

export default StatCard;
