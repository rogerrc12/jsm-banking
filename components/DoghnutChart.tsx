"use client";

import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const data02 = [
  { name: "A1", value: 100, fill: "#0179FE" },
  { name: "A2", value: 300, fill: "#4893FF" },
  { name: "A3", value: 100, fill: "#85B7FF" },
  { name: "A4", value: 80, fill: "#BED9FF" }
];

function DoghnutChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Tooltip />
        <Pie
          data={data02}
          dataKey='value'
          cx='50%'
          cy='50%'
          innerRadius={30}
          outerRadius={50}
          fill='#0179FE'
          label={false}
          labelLine={false}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DoghnutChart;
