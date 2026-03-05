import StatCard from "../components/StatCard";

const Markets = () => {
  const stats = [
    {
      label: "Total Market Cap",
      value: "$2.48T",
      change: "+2.4%",
    },

    {
      label: "24h Volume",
      value: "$84.2B",
      change: "+5.8 %",
    },

    { label: "BTC Dominance", value: "52.4%", change: "-0.3 % " },

    { label: "Active Cryptos", value: "12,847", change: "+24" },
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
