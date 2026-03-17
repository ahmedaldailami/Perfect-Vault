// import { PieChart } from "recharts";
import { ArrowDownUp, Clock3, DollarSign, FileStack } from "lucide-react";
import RevenueChart from "../charts/chart";
import PieChart from "../charts/PieChart";
import SalesChart from "../charts/ReChart";
import VisitsChart from "../charts/RechartLine";
import CardTabs from "../components/CardTabs";
import ChartCard from "../components/ChartCard";
import StatCard from "../components/StatCard";
import Trading from "../components/Trading";
import { pieChartData, pieChartOptions } from "../variables/charts";
import Transactions from "../components/utils/transactions/Transactions";
import Movers from "../components/utils/movers/Movers";
import Watchlist from "../components/utils/watchlist/Watchlist";

const Dashboard = () => {
  const stats = [
    {
      label: "Total Balance",
      value: "$84,254.32",
      change: "+12.5% this month",
      icon: DollarSign,
    },

    {
      label: "Total Profit",
      value: "$12,847.00",
      change: "+8.2% vs last week",
      icon: ArrowDownUp,
    },

    {
      label: "Pending Orders",
      value: "7",
      change: "3 buy, 4 sell",
      icon: Clock3,
    },

    {
      label: "Active Assets",
      value: "12",
      change: "Across 4 wallets",
      icon: FileStack,
    },
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
  const trading = [
    {
      tittle: "BTC/USD",
      price: "43,256.00",
      change: "+2.34",
    },
    {
      tittle: "ETH/USD",
      price: "2,284.50",
      change: "+1.87",
    },
  ];
  const info = [
    {
      tittle: "Asset Allocation",
    },
    {
      tittle: "Portfolio Health",
    },
    {
      tittle: "Risk Level",
    },
  ];

  return (
    <>
      <div className="grid xl:grid-cols-[1fr_280px] gap-[24px] mb-[24px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {charts.map((item) => (
              <ChartCard
                key={item.tittle}
                title={item.tittle}
                other={<CardTabs tabs={item.tabs} />}
              >
                {/* <PieChart options={pieChartOptions} series={pieChartData} /> */}
                {/* <RevenueChart /> */}
                {/* <SalesChart /> */}
                <VisitsChart />
              </ChartCard>
            ))}

            {trading.map((item) => (
              <ChartCard
                key={item.tittle}
                title={item.tittle}
                other={<Trading pair={item} />}
              />
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {info.map((item) => (
              <ChartCard title={item.tittle} key={item.tittle} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
          {stats.map((item) => (
            <StatCard stat={item} key={item.label} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Transactions />
        <Movers />
        <Watchlist />
      </div>
    </>
  );
};

export default Dashboard;
