const TransactionHistoryItem = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-4 px-0 py-4 border-b">
      <div className="size-11 rounded-[10px] flex items-center justify-center bg-myColor/10 text-muted">
        <Icon />
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold text-primary mb-1">
          {item.type}
        </div>
        <div className="text-[13px] text-muted">{item.date}</div>
      </div>
      <div className="text-right">
        <div className="text-base font-semibold mb-1 text-myColor">
          {item.value}
        </div>
        <span className="text-[13px] px-2 py-1 rounded-sm bg-myColor/10 text-myColor/50">
          {item.statu}
        </span>
      </div>
    </div>
  );
};
export default TransactionHistoryItem;
