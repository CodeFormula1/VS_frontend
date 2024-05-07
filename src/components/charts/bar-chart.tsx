import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    strategies: 35000,
  },
  {
    name: "2",
    strategies: 47000,
  },
  {
    name: "3",
    strategies: 44000,
  },
];

const BarChartExample = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
        <Legend />
        <CartesianGrid strokeDasharray="0 0" />
        <Bar
          dataKey="strategies"
          fill="#EB981A"
          background={{ fill: "transparent" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartExample;
