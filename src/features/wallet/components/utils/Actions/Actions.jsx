import { ArrowDown, ArrowUp, ArrowUpSquare, Lock } from "lucide-react";
import { useState } from "react";

const Actions = () => {
  const [active, setActive] = useState("Deposit");
  const actions = [
    {
      action: "Deposit",
      icon: ArrowDown,
    },
    {
      action: "Withdraw",
      icon: ArrowUp,
    },
    {
      action: "Swap",
      icon: ArrowUpSquare,
    },
    {
      action: "Stake",
      icon: Lock,
    },
  ];

  return (
    <section className="flex gap-4 mb-8 overflow-x-auto pb-3">
      {actions.map((item) => (
        <button
          key={item.action}
          onClick={() => setActive(item.action)}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-[10px] text-[16px] font-semibold cursor-pointer [font-family:inherit] [transition:all_0.2s_ease] hover:gradiant ${active === item.action ? "gradiant text-[#1c1c1e] border-none" : "bg-card border text-primary"}`}
        >
          <item.icon />
          <span>{item.action}</span>
        </button>
      ))}
    </section>
  );
};
export default Actions;
