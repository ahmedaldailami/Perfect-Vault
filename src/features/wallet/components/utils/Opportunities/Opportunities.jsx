import { OpportunitiesData } from "./Opportunities.config";
import Opportunity from "./Opportunity";

const Opportunities = () => {
  return (
    <section className="card-bg mb-8">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-5">
          Staking Opportunities
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-4">
        {OpportunitiesData.map((item) => {
          return <Opportunity key={item.name} item={item} />;
        })}
      </div>
    </section>
  );
};
export default Opportunities;
