const StatCard = ({ stat }) => {
  return (
    <div className="card-bg p-5 flex items-start gap-4 hover:border-myColor hover:-translate-y-1 hover:[box-shadow:0_8px_24px_var(--shadow)]">
      <div className="size-12 text-myColor bg-[rgba(184,_115,_51,_0.15)] rounded-xl flex items-center justify-center flex-shrink-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
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
