import { HeartPulse, Shield, Wallet2 } from "lucide-react";

const Branding = () => {
  return (
    <section className="flex-1 gradiant flex flex-col justify-center items-center p-15 relative overflow-hidden">
      <div className="relative z-1 text-center text-[#1c1c1e]">
        <div className="size-20 bg-[rgba(28,_28,_30,_0.2)] rounded-[20px] flex items-center justify-center text-[32px] font-bold mt-0 mx-auto mb-6 backdrop-filter backdrop-blur-">
          PV
        </div>
        <h1 className="text-[42px] font-bold mb-4">PerfectVault</h1>
        <p className="text-lg opacity-80 max-w-[400px] mt-0 mx-auto mb-12">
          Your secure gateway to the world of cryptocurrency trading and
          portfolio management
        </p>

        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3 text-base">
            <div className="size-8 bg-[rgba(28,_28,_30,_0.2)] rounded-lg flex items-center justify-center">
              <Shield />
            </div>
            Bank-grade security with 2FA protection
          </div>
          <div className="flex items-center gap-3 text-base">
            <div className="size-8 bg-[rgba(28,_28,_30,_0.2)] rounded-lg flex items-center justify-center">
              <HeartPulse />
            </div>
            Real-time market data and analytics
          </div>
          <div className="flex items-center gap-3 text-base">
            <div className="size-8 bg-[rgba(28,_28,_30,_0.2)] rounded-lg flex items-center justify-center">
              <Wallet2 />
            </div>
            Multi-wallet support with staking rewards
          </div>
        </div>
      </div>
    </section>
  );
};
export default Branding;
