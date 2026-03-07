import ChartCard from "../../ChartCard";
import { TopMovers } from "./Movers.config";
import MoversItem from "./MoversItem";
import MoversTab from "./MoversTabs";

const Movers = () => {
  return (
      <ChartCard title="Top Movers" other={<MoversTab />}>
        <div className="flex flex-col">
          {TopMovers.map((item) => {
            return <MoversItem key={item.title} item={item} />;
          })}
        </div>
      </ChartCard>
  );
};
export default Movers;
