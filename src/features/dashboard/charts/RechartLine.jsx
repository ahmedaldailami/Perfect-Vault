import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// const data = [
//   { day: "Mon", visits: 120 },
//   { day: "Tue", visits: 300 },
//   { day: "Wed", visits: 250 },
//   { day: "Thu", visits: 400 },
//   { day: "Fri", visits: 350 },
// ];
const data = [
  { day: "Mon", viws: 400 },
  { day: "Tue", viws: 300 },
  { day: "Wed", viws: 500 },
  { day: "Thu", viws: 350 },
  { day: "Fri", viws: 450 },
  { day: "Sat", viws: 500 },
  { day: "Sun", viws: 450 },
];

export default function VisitsChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="day"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          stroke="var(--color-muted)"
        />
        {/* <YAxis /> */}
        <Line
          dataKey="viws"
          stroke="var(--color-myColor-light)"
          fill="var(--color-myColor)"
        />
        <CartesianGrid vertical={false} />
        <Tooltip contentStyle={{backgroundColor: "#111", border: "none", borderRadius: "10px" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
