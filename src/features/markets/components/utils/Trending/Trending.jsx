import { TrendingData } from "./Trending.config";
import TrendingItem from "./TrendingItem";

const Trending = () => {
  return (
    <div className="card-bg">
      <div className="flex justify-between items-center mb-6 w-full">
        <h2 className="text-xl font-semibold text-primary">🔥 Trending</h2>
      </div>
      <div className="flex flex-col">
        {TrendingData.map((item) => {
          return <TrendingItem key={item.title} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Trending;
