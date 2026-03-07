import ChartCard from "../../ChartCard";
import TransactionItem from "./TransactionItem";
import { recentTransactions } from "./Transactions.config";

const Transactions = () => {
  // console.log(recentTransactions[0]);

  return (
      <ChartCard
        title="Recent Transactions"
        other={
          <span className="text-sm text-myColor font-medium hover:text-myColor-light">
            View All
          </span>
        }
      >
        {recentTransactions.map((item) => {
          return <TransactionItem key={item.title} item={item} />;
        })}

      </ChartCard>
  );
};
export default Transactions;
