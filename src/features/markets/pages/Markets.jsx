import StatCard from "../components/StatCard";

const Markets = () => {
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

  return (
    <div className="">
      <div className="grid grid-cols-[repeat(4,_1fr)] gap-5 mb-8">
        {stats.map((item) => (
          <StatCard stat={item} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Markets;
