import { ArrowDownUp, FileStack, Wallet2 } from "lucide-react";
import BalanceCard from "./BalanceCard";

const Balance = () => {
  const Data = [
    {
      label: "Total Balance",
      value: "$84,254.32",
      change: "+$2,847.50 (3.5%) this month",
      icon: Wallet2,
      active: true,
    },
    {
      label: "Staked Assets",
      value: "$12,450.00",
      change: "Earning 8.2% APY",
      icon: FileStack,
      active: false,
    },
    {
      label: "Total Rewards",
      value: "$1,024.80",
      change: "+$45.20 this week",
      icon: ArrowDownUp,
      active: false,
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {Data.map((item) => {
          return <BalanceCard key={item.title} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Balance;
