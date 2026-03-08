import Fear from "../components/utils/Fear/Fear";
import FilterSection from "../components/utils/filters/FilterSection";
import StatCard from "../components/utils/Stats/StatCard";
import { StatsData } from "../components/utils/Stats/Stats.config";
import Trending from "../components/utils/Trending/Trending";

const Markets = () => {
  return (
    <div className="">
      <div className="grid grid-cols-[repeat(4,_1fr)] gap-5 mb-8">
        {StatsData.map((item) => (
          <StatCard stat={item} key={item.label} />
        ))}
      </div>
      <FilterSection />
      <div className="grid grid-cols-[2fr_1fr] gap-5">
        <div className="card-bg"></div>
        <div className="grid gap-5">
          <Trending />
          <Fear />
        </div>
      </div>
    </div>
  );
};

export default Markets;
