// import ReactApexChart from "react-apexcharts";

export default function RevenueChart() {
  const options = {
    chart: {
      id: "revenue-chart",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    stroke: {
      curve: "smooth",
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [100, 200, 150, 300, 250],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full">
      <h2 className="text-xl font-semibold mb-4">Revenue Growth</h2>

      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
}
