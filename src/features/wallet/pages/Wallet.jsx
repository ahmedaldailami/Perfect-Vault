import Actions from "../components/utils/Actions/Actions";
import Addresses from "../components/utils/Addresses/Addresses";
import Balance from "../components/utils/Balance/Balance";

const Wallet = () => {
  return (
    <div>
     <Balance />
     <Actions />
    <Addresses />
    </div>
  );
};  

export default Wallet;
