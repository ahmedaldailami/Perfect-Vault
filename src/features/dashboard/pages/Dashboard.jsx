import ChartCard from "../components/ChartCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[1fr_280px] gap-[24px] mb-[24px]">
      
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <ChartCard
            title="Portfolio Overview"
            tabs={[
              { name: "1w", active: true },
              { name: "2w", active: false },
              { name: "3w", active: false },
              { name: "4w", active: false },
            ]}
          />
          <ChartCard
            title="Portfolio Overview"
            tabs={[
              { name: "1w", active: true },
              { name: "2w", active: false },
              { name: "3w", active: false },
              { name: "4w", active: false },
            ]}
          />
          <ChartCard
            title="Portfolio Overview"
            tabs={[
              { name: "1w", active: true },
              { name: "2w", active: false },
              { name: "3w", active: false },
              { name: "4w", active: false },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ChartCard
          title="Portfolio Overview"
          tabs={[
            { name: "1w", active: true },
            { name: "2w", active: false },
            { name: "3w", active: false },
            { name: "4w", active: false },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
