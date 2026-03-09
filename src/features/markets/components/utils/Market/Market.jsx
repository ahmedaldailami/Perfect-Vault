import { MarketData } from "./Market.config";
import MarketItem from "./MarketItem";

const Market = () => {
  return (
    <div className="card-bg">
      <table className="w-full border-collapse">
        <thead>
          <tr className=" *:px-4 *:py-3 border-b text-xs font-semibold text-muted uppercase tracking-[0.5px] ">
            <th className="text-left">#</th>
            <th className="text-left">Coin</th>
            <th className="text-right">Price</th>
            <th className="text-right">24h %</th>
            <th className="text-right">Volume</th>
            <th className="text-right">Market Cap</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {MarketData.map((item) => {
            return <MarketItem key={item.title} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Market;
