import CardTabs from "../components/CardTabs";
import ChartCard from "../components/ChartCard";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const stats = [
    {
      label: "Total Balance",
      value: "$84,254.32",
      change: "+12.5% this month",
    },

    {
      label: "Total Profit",
      value: "$12,847.00",
      change: "+8.2% vs last week",
    },

    { label: "Pending Orders", value: "7", change: "3 buy, 4 sell" },

    { label: "Active Assets", value: "12", change: "Across 4 wallets" },
  ];

  const charts = [
    {
      tittle: "Portfolio Overview",
      tabs: [
        { name: "1D", active: true },
        { name: "1W", active: false },
        { name: "1M", active: false },
        { name: "1Y", active: false },
      ],
    },
    {
      tittle: "Asset Performance",
      tabs: [
        { name: "Week", active: true },
        { name: "Month", active: false },
        { name: "Year", active: false },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-[1fr_280px] gap-[24px] mb-[24px]">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          {charts.map((item) => (
            <ChartCard
              title={item.tittle}
              other={<CardTabs tabs={item.tabs} />}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {stats.map((item) => (
          <StatCard stat={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
