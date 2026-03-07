const TransactionItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-3.5 px-0 py-3.5 border-b">
      <div className="size-10 rounded-[10px] flex items-center justify-center bg-myColor text-muted">
        <Icon />
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-[15px] font-semibold text-primary">
          {item.title}
        </span>
        <span className="text-[13px] text-muted">{item.date}</span>
      </div>
      <div className="text-[15px] font-semibold text-myColor-light positive">
        {item.amount}
      </div>
    </div>
  );
};
export default TransactionItem;
