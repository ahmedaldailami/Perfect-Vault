import ChartCard from "../../ChartCard";
import AddBtn from "./AddBtn";
import { WatchlistData } from "./Watchlist.config";
import WatchlistItem from "./WatchlistItem";

const Watchlist = () => {
  return (
    <ChartCard title="Watchlist" other={<AddBtn />}>
      <div className="flex flex-col">
        {WatchlistData.map((item) => {
          return <WatchlistItem key={item.title} item={item} />;
        })}
      </div>
    </ChartCard>
  );
};
export default Watchlist;
