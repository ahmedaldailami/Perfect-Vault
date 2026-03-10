import Actions from "../components/utils/Actions/Actions";
import Addresses from "../components/utils/Addresses/Addresses";
import Balance from "../components/utils/Balance/Balance";
import Opportunities from "../components/utils/Opportunities/Opportunities";
import TransactionHistory from "../components/utils/TransactionHistory/TransactionHistory";

const Wallet = () => {
  return (
    <div>
     <Balance />
     <Actions />
    <Addresses />
    <Opportunities />
    <TransactionHistory />
    </div>
  );
};  

export default Wallet;
