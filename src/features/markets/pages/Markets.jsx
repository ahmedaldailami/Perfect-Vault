import StatCard from "../components/utils/Stats/StatCard";
import { StatsData } from "../components/utils/Stats/Stats.config";

const Markets = () => {


  

  return (
    <div className="">
      <div className="grid grid-cols-[repeat(4,_1fr)] gap-5 mb-8">
        {StatsData.map((item) => (
          <StatCard stat={item} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Markets;
