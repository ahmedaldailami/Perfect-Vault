import Actions from "../components/utils/Actions/Actions";
import Addresses from "../components/utils/Addresses/Addresses";
import Balance from "../components/utils/Balance/Balance";
import Opportunities from "../components/utils/Opportunities/Opportunities";

const Wallet = () => {
  return (
    <div>
     <Balance />
     <Actions />
    <Addresses />
    <Opportunities />
    </div>
  );
};  

export default Wallet;
