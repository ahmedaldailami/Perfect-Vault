import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ChartCard from "../components/ChartCard";


const data = [
  { day: "Mon", value: 100 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 160 },
  { day: "Thu", value: 250 },
  { day: "Fri", value: 220 },
  { day: "Sat", value: 300 },
  { day: "Sun", value: 350 },
];

export default function PortfolioChart() {
  return (
    <ChartCard title="Portfolio Overview">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#2b2e3b" vertical={false} />

          <XAxis dataKey="day" stroke="#777" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#f59e0b"
            strokeWidth={3}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
