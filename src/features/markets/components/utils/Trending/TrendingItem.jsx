const TrendingItem = ({ item }) => {
  return (
    <div className="flex items-center gap-3 px-0 py-3 border-b">
      <div className="size-6 rounded-md bg-[rgba(184,_115,_51,_0.15)] flex items-center justify-center text-xs font-bold text-myColor flex-shrink-0">
        {item.rank}
      </div>
      <div className="flex items-center gap-2.5 flex-1">
        <div
          className="size-8 rounded-full flex items-center justify-center font-bold text-xs text-white "
          style={item.color}
        >
          {item.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-primary">
            {item.title}
          </span>
          <span className="text-xs text-muted">{item.symbol}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-sm font-semibold text-primary block mb-0.5">
          {item.price}
        </span>
        <span className="text-[13px] font-semibold text-myColor-light">
          {item.change}
        </span>
      </div>
    </div>
  );
};
export default TrendingItem;
