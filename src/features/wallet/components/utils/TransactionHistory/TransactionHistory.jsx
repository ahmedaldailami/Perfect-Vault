import { TransactionHistoryData } from "./TransactionHistory.config";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = () => {
  return (
    <div className="card-bg mb-8">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-5">
          Transaction History
        </h2>
      </div>

      <div className="flex flex-col">
        {TransactionHistoryData.map((item) => {
          return <TransactionHistoryItem key={item.type} item={item} />;
        })}
      </div>
    </div>
  );
};
export default TransactionHistory;
