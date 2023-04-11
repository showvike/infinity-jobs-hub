import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Assignment 1", value: 58 },
  { name: "Assignment 2", value: 59 },
  { name: "Assignment 3", value: 50 },
  { name: "Assignment 4", value: 60 },
  { name: "Assignment 5", value: 59 },
  { name: "Assignment 6", value: 60 },
];

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#9873FF",
  "#f4f4f4",
];

export default function Statistics() {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
