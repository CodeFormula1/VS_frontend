import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  // ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data01 = [
  { x: 10, y: 25500, z: 200 },
  { x: 20, y: 15500, z: 260 },
  { x: 35, y: 15500, z: 260 },
  { x: 43, y: 15500, z: 260 },
  { x: 30, y: 35500, z: 400 },
  { x: 40, y: 2550, z: 280 },
  { x: 33, y: 40000, z: 500 },
  { x: 45, y: 33000, z: 500 },
  { x: 22, y: 13000, z: 500 },
  { x: 10, y: 7000, z: 500 },
  { x: 30, y: 27000, z: 500 },
  { x: 30, y: 25580, z: 200 },
];
const data02 = [
  { x: 20, y: 25560, z: 240 },
  { x: 40, y: 29550, z: 220 },
  { x: 44, y: 20590, z: 250 },
  { x: 33, y: 15550, z: 210 },
  { x: 18, y: 24890, z: 260 },
  { x: 21, y: 20020, z: 230 },
];
const data03 = [
  { x: 10, y: 22260, z: 240 },
  { x: 30, y: 12290, z: 220 },
  { x: 40, y: 29220, z: 250 },
  { x: 38, y: 19050, z: 210 },
  { x: 20, y: 28880, z: 260 },
  { x: 45, y: 22220, z: 230 },
];

const ThreeDimChart = ({ height, tab }: { height: number; tab: number }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart
        margin={{
          top: 20,
          right: 30,
          bottom: 0,
          left: 10,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="lap" unit="lap" />
        <YAxis type="number" dataKey="y" name="sec" unit="s" />
        {/* <ZAxis
          type="number"
          dataKey="z"
          range={[60, 400]}
          name="score"
          unit="km"
        /> */}
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />

        <Scatter
          name="NEW"
          data={tab === 0 ? data01 : []}
          fill={tab === 0 ? "#7700C0" : "gray"}
          shape="circle"
        />

        <Scatter
          name="SCRUBBED"
          data={tab === 1 ? data02 : []}
          fill={tab === 1 ? "#00B0F0" : "gray"}
          shape="circle"
        />
        <Scatter
          name="USED"
          data={tab === 2 ? data03 : []}
          fill={tab === 2 ? "#4AFB86" : "gray"}
          shape="circle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ThreeDimChart;
