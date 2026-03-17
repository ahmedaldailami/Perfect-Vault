import { WalletList } from "./Addresses.config";
import AddressesItem from "./AddressesItem";
import DepositQR from "./DepositQR";

const Addresses = () => {
  return (
    <section className="grid xl:grid-cols-[2fr_1fr] gap-5 mb-8">
      {/*        Your Wallets card       */}
      <div className="card-bg">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-5">
            Your Wallets
          </h2>
        </div>
          <div className="flex flex-col gap-4">
            {WalletList.map((item) => (
              <AddressesItem item={item} key={item.name} />
            ))}
          </div>
        </div>

      {/*        Deposit QR card         */}
      <DepositQR />
    </section>
  );
};
export default Addresses;
