import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "../components/ChartCard";


const data = [
  { name: "BTC", value: 60 },
  { name: "ETH", value: 45 },
  { name: "SOL", value: 70 },
  { name: "BNB", value: 40 },
  { name: "ADA", value: 30 },
];

export default function AssetChart() {
  return (
    <ChartCard title="Asset Performance">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#777" />

          <Tooltip />

          <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
