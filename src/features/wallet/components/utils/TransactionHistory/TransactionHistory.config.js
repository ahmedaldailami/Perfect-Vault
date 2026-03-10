import { ArrowDown, ArrowUp, Lock } from "lucide-react";

export const TransactionHistoryData = [
  {
    icon: ArrowDown,
    type: "Deposit BTC",
    date: "Today, 2:45 PM",
    value: "+0.0567 BTC",
    statu: "Completed",
  },
  {
    icon: ArrowUp,
    type: "Withdraw ETH",
    date: "Yesterday, 11:20 AM",
    value: "-0.805 ETH",
    statu: "Completed",
  },
  {
    icon: Lock,
    type: "Stake SOL",
    date: "Dec 28, 4:15 PM",
    value: "-25.00 SOL",
    statu: "Pending",
  },
  {
    icon: ArrowDown,
    type: "Staking Reward",
    date: "Dec 27, 9:30 AM",
    value: "+0.012 ETH",
    statu: "Completed",
  },
];
