import { QrCode } from "lucide-react";

const DepositQR = () => {
  return (
    <div className="card-bg">
      <div className="card-header">
        <h2 className="text-xl font-semibold text-primary mb-5">
          Receive Bitcoin
        </h2>
      </div>
      <div className="text-center p-6">
        <div className="size-[180px] bg-white rounded-xl mt-0 mx-auto mb-5 flex items-center justify-center p-4">
          <QrCode className="size-full text-black" />
        </div>
        <div className="text-[13px] text-muted font-mono break-all mb-4 p-3 bg-[rgba(255,_255,_255,_0.03)] rounded-lg">
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
        </div>
        <div className="flex gap-3 justify-center">
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer [transition:all_0.2s_ease] border bg-transparent text-primary hover:bg-card-alt">
            Copy
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer [transition:all_0.2s_ease] gradiant border-none text-[#1c1c1e] hover:bg-card-alt">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
export default DepositQR;
