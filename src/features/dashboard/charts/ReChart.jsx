import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "BTC", sales: 8.2 },
  { name: "ETH", sales: 6.5 },
  { name: "USDT", sales: 0.1 },
  { name: "SOL", sales: 12.4 },
  { name: "BNB", sales: 2.8 },
  { name: "ADA", sales: 1.9 },
  { name: "XRP", sales: 1.2 },
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="" height="200">
      <BarChart data={data}>
        <XAxis dataKey="name"  />
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        <Bar dataKey="sales" fill="var(--color-myColor-light)" radius={[1, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
