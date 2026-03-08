const WatchlistItem = ({ item }) => {
  return (
    <div className="flex items-center gap-3 px-0 py-3 border-b">
      <div className="flex items-center gap-2.5 flex-1">
        <div
          className="size-9 rounded-full flex items-center justify-center font-bold text-xs text-white "
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
      <svg class="w-[60px] h-6" viewBox="0 0 50 20">
        <polyline
          points="0,15 8,12 16,14 24,8 32,10 40,5 50,7"
          fill="none"
          stroke="#6b8e6b"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
export default WatchlistItem;
