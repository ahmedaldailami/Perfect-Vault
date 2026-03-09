const MarketItem = ({ item }) => {
  return (
    <tr className="*:p-4 *:border-b *:align-middle hover:bg-[#ffffff05]">
      <td className="">
        <span className="text-[13px] text-muted w-6">{item.rank}</span>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full flex items-center justify-center font-bold text-xs text-white "
            style={item.color}
          >
            {item.icon}
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">
              {item.title}
            </div>
            <div className="text-md text-muted">BTC</div>
          </div>
        </div>
      </td>
      <td className="text-[15px] font-semibold text-primary text-right">
        $43,256.00
      </td>
      <td className="text-right text-sm font-semibold positive">+2.34%</td>
      <td className="text-right text-sm text-secondary">$28.4B</td>
      <td className="text-right text-sm text-secondary">$847.2B</td>
      <td>
        <button className="bg-none cursor-pointer text-muted p-1 text-lg [transition:color_0.2s_ease] active">
          ★
        </button>
      </td>
    </tr>
  );
};
export default MarketItem;
